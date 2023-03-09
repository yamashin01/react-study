import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../type/User";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch((error) => {
          showMessage({
            title: "ユーザーの取得に失敗しました",
            status: "error",
          });
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, showMessage]
  );
  return {
    login,
    loading,
  };
};
