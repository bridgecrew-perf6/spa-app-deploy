import React, { ReactElement, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { User } from "@/models";
import { getApi } from "@/lib";

function Page(): ReactElement {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAds = async () => {
      const users: User[] = await getApi("/api/users");
      setUsers(users);
    };
    fetchAds();
  }, []);
  return (
    <>
      <Box w="100%" p="0 100px">
        <Flex w="100%" h="100px" alignItems="center" mt="20px">
          <Heading fontSize="lg">ユーザー一覧</Heading>
        </Flex>
        <Box w="100%">
          <Table>
            <Thead>
              <Tr>
                <Th>ユーザー名</Th>
                <Th>メールアドレス</Th>
                <Th>編集</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    {/* <Link href={`/ads/${encodeURIComponent(ad.id)}`}>
                      <Button variant="outline" size="sm">
                        編集
                      </Button>
                    </Link> */}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Flex
          w="100%"
          mt="10px"
          h="150px"
          justifyContent="center"
          alignItems="center"
        >
          <Link href="/users/new" passHref>
            <Button variant="outline" p="24px">
              ユーザーの新規追加
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export default Page;
