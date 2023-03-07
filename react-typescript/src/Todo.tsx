type PropsType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: PropsType) => {
  const { title, userId, completed = false } = props;
  const isCompletedStr: string = completed ? "[完]" : "[未]";
  return <p>{`${isCompletedStr}${title}(ユーザー：${userId})`}</p>;
};
