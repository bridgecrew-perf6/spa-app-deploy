import React, { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const GlobalHeader = (): ReactElement => {
  return (
    <Flex w="100%" h="50px" boxShadow="sm" align="center">
      <Text fontSize="xl" fontWeight="bold" color="red" as="i" pl="10px">
        <Link href="/">
          <a>さんぷるアプリ</a>
        </Link>
      </Text>
    </Flex>
  );
};
