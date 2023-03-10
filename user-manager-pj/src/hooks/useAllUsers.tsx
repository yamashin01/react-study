import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../type/User";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました。", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);
  return {
    getUsers,
    users,
    loading,
  };
};
