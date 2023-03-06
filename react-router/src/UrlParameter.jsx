import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>URL Parameterページです</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
