import React, { ReactElement } from "react";
import { useRouter } from "next/dist/client/router";
import UserFormPage from "@/components/ads/UserFormPage";
import { UserForm } from "@/models/forms";

const Page = (): ReactElement => {
  const router = useRouter();

  const handleSubmit = async (form: UserForm) => {
    console.log(form);
    try {
      // await graphql.ad.create(adData);
      alert("広告を保存しました");
      // router.push("/users");
    } catch (e) {
      alert("広告の保存に失敗しました");
      console.error(e);
    }
  };

  return (
    <UserFormPage
      title="ユーザー作成"
      handleSubmit={handleSubmit}
    ></UserFormPage>
  );
};

export default Page;
