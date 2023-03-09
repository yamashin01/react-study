import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const DrawMenu: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props;
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={0} bg="gray.100">
          <Button onClick={onClickHome} w="100%">
            TOP
          </Button>
          <Button onClick={onClickUserManagement} w="100%">
            ユーザー一覧
          </Button>
          <Button onClick={onClickSetting} w="100%">
            設定
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
