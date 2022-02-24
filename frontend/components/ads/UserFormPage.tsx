import React, { ReactElement, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { User } from "@/models";
import { UserForm } from "@/models/forms";
import { ErrorMessage } from "@/components/ErrorMessage";

type Props = {
  title: string;
  handleSubmit: (form: UserForm) => void;
  handleDelete?: () => void;
  user?: User;
};

type FormValues = {
  userName: string;
  userEmail: string;
  userPassword: string;
};

type FormKey = keyof FormValues;

const UserFormPage = (props: Props): ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty },
    control,
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      userName: props.user?.name || "",
      userEmail: props.user?.email || "",
      userPassword: "",
    },
  });

  const genUserFormFromFormData = (data: FormValues): UserForm => {
    return {
      name: data.userName,
      email: data.userEmail,
      password: data.userPassword,
    } as UserForm;
  };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const userForm: UserForm = genUserFormFromFormData(data);
    props.handleSubmit(userForm);
  };

  const onDeleteSubmit = () => {
    if (props.handleDelete && confirm("本当に削除してよろしいですか？")) {
      props.handleDelete();
    }
  };

  return (
    <>
      <Container maxW="850px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex w="100%" h="100px" alignItems="center" mt="20px">
            <Heading fontSize="lg">{props.title}</Heading>
          </Flex>
          <Box w="95%">
            <FormControl isRequired>
              <FormLabel>名前</FormLabel>
              <Input
                placeholder="名前を入力"
                isInvalid={!!errors.userName}
                {...register("userName", {
                  required: true,
                  maxLength: {
                    value: 30,
                    message: "30文字以内で入力してください",
                  },
                })}
              />
              <ErrorMessage error={errors.userName} />
            </FormControl>
            <FormControl isRequired mt="25px">
              <FormLabel>メールアドレス</FormLabel>
              <Input
                placeholder="メールアドレスを入力"
                isInvalid={!!errors.userEmail}
                {...register("userEmail", {
                  required: true,
                  maxLength: {
                    value: 30,
                    message: "30文字以内で入力してください",
                  },
                })}
              />
              <ErrorMessage error={errors.userEmail} />
            </FormControl>
            <FormControl isRequired mt="25px">
              <FormLabel>パスワード</FormLabel>
              <Input
                placeholder="パスワードを入力"
                isInvalid={!!errors.userPassword}
                {...register("userPassword", {
                  required: true,
                  maxLength: {
                    value: 30,
                    message: "30文字以内で入力してください",
                  },
                })}
              />
              <ErrorMessage error={errors.userPassword} />
            </FormControl>
          </Box>
          <Flex
            w="100%"
            mt="60px"
            h="100px"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              type="submit"
              colorScheme="blue"
              variant="outline"
              w="200px"
              p="20px"
              isDisabled={!isDirty}
            >
              保存
            </Button>
            {props.handleDelete && (
              <Button
                onClick={onDeleteSubmit}
                colorScheme="red"
                variant="outline"
                w="200px"
                p="20px"
                ml="50px"
              >
                削除
              </Button>
            )}
          </Flex>
        </form>
      </Container>
    </>
  );
};

export default UserFormPage;
