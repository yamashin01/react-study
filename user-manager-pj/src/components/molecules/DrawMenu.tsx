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
};
export const DrawMenu: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%">TOP</Button>
          <Button w="100%">ユーザー一覧</Button>
          <Button w="100%">設定</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
