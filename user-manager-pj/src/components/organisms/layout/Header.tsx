import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "../../atoms/button/MenuIcon";
import { DrawMenu } from "../../molecules/DrawMenu";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = useCallback(() => navigate("/home"), [navigate]);
  const onClickUserManagement = useCallback(
    () => navigate("/home/user-management"),
    [navigate]
  );
  const onClickSetting = useCallback(
    () => navigate("/home/setting"),
    [navigate]
  );

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
        <Flex
          as="a"
          align="center"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
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
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIcon onOpen={onOpen} />
      </Flex>
      <DrawMenu
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
