import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import UserFormPage from "@/components/ads/UserFormPage";
import { User } from "@/models";
import { UserForm } from "@/models/forms";
import { putApi, getApi, deleteApi } from "@/lib";

const Page = (): ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user: User = await getApi(`/api/users/${id as string}`);
        setUser(user);
      } catch (e) {
        console.error(e);
        throw e;
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (form: UserForm) => {
    try {
      const userForUpdate = form;
      await putApi(`/api/users/${user?.id}`, userForUpdate);
      alert("ユーザーを更新しました");
      router.push("/users");
    } catch (e) {
      console.error(e);
      alert("ユーザーの更新に失敗しました");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteApi(`/api/users/${user?.id}`);
      alert("ユーザーを削除しました");
      router.push("/users");
    } catch (e) {
      console.error(e);
      alert("ユーザーの削除に失敗しました");
    }
  };

  return (
    <>
      {user && (
        <UserFormPage
          title="ユーザー詳細"
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          user={user}
        />
      )}
    </>
  );
};

export default Page;
