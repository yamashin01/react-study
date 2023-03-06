import { memo } from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/SeachInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `taro${val}`,
    imageUrl:
      "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    email: "test@XXXX.com",
    phone: "090-0000-1111",
    company: {
      name: "テスト株式会社",
      website: "https://google.com",
    },
  };
});

export const Users = memo(() => {
  return (
    <SContainer>
      <h2>ユーザーページです。</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SUserArea>
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
