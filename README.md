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
      	"Statement": [
      		{
      			"Sid": "PublicReadGetObject",
      			"Effect": "Allow",
      			"Principal": "*",
      			"Action": "s3:GetObject",
      			"Resource": "arn:aws:s3:::spa-deploy-20220228/*"
      		}
      	]
      }
    ```
