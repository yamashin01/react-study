import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/UserStore";

export const Top = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userState);
  const onClickAsAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickAsGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
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
