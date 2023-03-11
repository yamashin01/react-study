import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { User } from "../../../type/User";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User;
};
export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>ユーザー名</FormLabel>
              <Input value={user?.username} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input value={user?.email} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input value={user?.phone} readOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
