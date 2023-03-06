import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const onClickAsAdmin = () => navigate("/users", { state: { admin: true } });
  const onClickAsGeneral = () =>
    navigate("/users", { state: { admin: false } });
  return (
    <SContainer>
      <h2>Topページです。</h2>
      <SecondaryButton onClick={onClickAsAdmin}>管理者ユーザ</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickAsGeneral}>一般ユーザ</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
