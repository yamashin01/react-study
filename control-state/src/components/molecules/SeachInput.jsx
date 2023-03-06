import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SButtonContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SButtonContainer>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
const SButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
