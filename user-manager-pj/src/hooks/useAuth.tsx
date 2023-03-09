import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../type/User";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            navigate("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch((error) => {
          alert("ユーザーの取得に失敗しました。");
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate]
  );
  return {
    login,
    loading,
  };
};
