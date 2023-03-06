import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const navigate = useNavigate();
  const onClickDetailA = () => navigate("/page1/DetailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/DetailA" }} state={{ arr }}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/DetailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
