import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { selectedUser, onSelectUser } = useSelectUser();

  useEffect(() => getUsers(), [getUsers]);
  const handleOpenModal = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [onSelectUser, users, onOpen]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => {
            return (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={handleOpenModal}
                />
              </WrapItem>
            );
          })}
          <UserDetailModal
            isOpen={isOpen}
            onClose={onClose}
            user={selectedUser!}
          />
        </Wrap>
      )}
    </>
  );
});
