# デプロイ参考

- EC2（laravel, php8.0）
- S3（Nuxtjs TypeScript (Next でもよかったかも)）
- CloudFront（URL でオリジンの制御）

## Laravel EC2 デプロイ

- https://brainlog.jp/server/aws/post-2808/
- mysql のインストール中に起こったエラー
  - https://blog.katsubemakito.net/mysql/mysql-update-error-gpg
- composer install
  - https://getcomposer.org/download/

## Nuxtjs の S3 デプロイ

- https://zenn.dev/grinch1252/articles/3b53f295c5371f
- ポリシー
  - ```
    {
      	"Version": "2012-10-17",
        "Id": "PolicyForCloudFrontPrivateContent",
      	"Statement": [
          // s3の配信用の設定（cloudfront設定時は不要）
      		{
      			"Sid": "PublicReadGetObject",
      			"Effect": "Allow",
      			"Principal": "*",
      			"Action": "s3:GetObject",
      			"Resource": "arn:aws:s3:::spa-deploy-20220228/*"
      		},
          // cloudfront用の設定
          {
            "Sid": "1",
            "Effect": "Allow",
            "Principal": {
              "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E2Z7Y5KS71DPHV"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::spa-deploy-20220228/*"
          }
      	]
      }
    ```

## cloudfront 設定

### cloudfront

- https://qiita.com/right1121/items/8e5fec1f109fdd5ba152

### S3 の URL 対応

- https://zenn.dev/yh1224/articles/idhrg2tqg12onyf71
- https://scrapbox.io/ryoheimorimoto/Nuxt.js%E3%81%A7%E4%BD%9C%E3%81%A3%E3%81%9F%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92CloudFront_+_S3%E3%81%A7%E9%85%8D%E4%BF%A1%E3%81%99%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AETips

## 独自ドメイン

### S3

- https://dev.classmethod.jp/articles/cloudfront-s3-customdomain/
- freenom
  - https://qiita.com/iiiiiiiiih/items/aabe1cd09f368f0bf2b8
  - https://dev.classmethod.jp/articles/alb-route53-acm-build2/

### EC2

気合

- CloudFront のオリジンとビヘイビアをいじれば基本行ける
- (ALB の HTTPS 化も必要)
  - バックエンド（ALB）のビヘイビアは Route53 で発行した ALB 用のサブドメインに指定する
    - オリジンもサブドメインで登録が必要
