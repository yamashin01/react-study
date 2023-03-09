import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MenuIcon } from "../../atoms/button/MenuIcon";
import { DrawMenu } from "../../molecules/DrawMenu";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        align="center"
        color="gray.50"
        justifyContent="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex as="a" align="center" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIcon onOpen={onOpen} />
      </Flex>
      <DrawMenu onClose={onClose} isOpen={isOpen} />
    </>
  );
});
