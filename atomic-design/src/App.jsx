import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SeachInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

export default function App() {
  const user = {
    name: "taro",
    imageUrl:
      "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    email: "test@XXXX.com",
    phone: "090-0000-1111",
    company: {
      name: "テスト株式会社",
      website: "https://google.com",
    },
  };
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          <PrimaryButton>テスト</PrimaryButton>
          <SecondaryButton>検索</SecondaryButton>
          <SearchInput />
          <UserCard user={user} />
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}
