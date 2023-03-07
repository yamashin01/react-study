export const Todo = (props) => {
  const { title, userId } = props;
  return <p>{`${title}(ユーザー：${userId})`}</p>;
};
