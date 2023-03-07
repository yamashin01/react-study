import { FC } from "react";
import { TodoType } from "./types/todo";

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const isCompletedStr: string = completed ? "[完]" : "[未]";
  return <p>{`${isCompletedStr}${title}(ユーザー：${userId})`}</p>;
};
