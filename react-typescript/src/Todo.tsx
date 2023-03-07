import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const isCompletedStr: string = completed ? "[完]" : "[未]";
  return <p>{`${isCompletedStr}${title}(ユーザー：${userId})`}</p>;
};
