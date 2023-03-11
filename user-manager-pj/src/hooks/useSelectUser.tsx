import { useCallback, useState } from "react";
import { User } from "../type/User";

type Props = {
  id: number;
  users: User[];
  onOpen: () => void;
};

// 選択したユーザー情報を特定し、モーダルを開く
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => {
      return user.id === id;
    });
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return {
    onSelectUser,
    selectedUser,
  };
};
