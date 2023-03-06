import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
