# react-study

## レンダリングの最適化

### 再レンダリングが起きる条件

- state が更新されたコンポーネント
- props が変更されたコンポーネント
- 再レンダリングされたコンポーネント配下の子コンポーネント

### memo

更新のない子コンポーネントを`memo`で囲むことにより、余計な再レンダリングのコストを避ける

#### 使い方

子コンポーネントを`memo()`でラップする。

#### コード例

```javascript
import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
```

### useCallback

子コンポーネントに受け渡す値に関数が含まれる場合、親コンポーネントが更新されるたびに関数が再生成されて`props`が変更され、再レンダリングが実行される。
関数の再生成を防ぐためには、`useCallback`を利用する。

#### 使い方

変更がなければ再生成しない関数を`useCallback()`でラップする。第二引数には再生成するための値を設定する。

#### コード例

```javascript
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [open, setOpen] = useState(false);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
```

## React と相性の良い CSS の紹介

### Inline Styles

Style をオブジェクトで定義し、タグ内の`style`にセットする。

```javascript
export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {
    mrgin: 0,
    color: "#3d84a8",
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- InlineStyle -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
```

### CSS Modules

#### 事前設定

`node-sass`をインストールする

```
$ npm install node-sass --save-dev
```

#### 使い方

別ファイルとして、XXXX.modules.scss ファイルを生成し、通常の CSS の記法で Style を記述する。
適当な名前で import し、`className`で当てたいタグにセットする。

```javascript
.container {
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title {
  margin: 0;
  color: #3d84a8;
}

.button {
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
};
```

```javascript
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>-CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
```

### Styled JSX

#### 事前設定

`styled-jsx`をインストールする。
※Next.js にはデフォルトで入っているため不要。

```
$ npm install --save styled-jsx
```

#### 使い方

` <style jsx="true">{``}</style>`内に CSS 記法を記述する。`className`で適用したいタグに当てる。

```javascript
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-StyledJsx-</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
```

### StyledComponents

#### 事前準備

styled-components をインストールする

```
$ npm i --save styled-components
```

#### 使い方

1. `styled-components`をインポートする
2. インポートしたクラスと既存のタグ名（`div`等）を紐付けして CSS を記述した Style を新規タグとして保存する。

```javascript
const Container = styled.div`
  border: solid 2px #392eff;
`;
```

3. 新規に生成したタグを React 内で使用する。

```javascript
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>-StyledComponents-</Title>
      <Button>FIGHT!!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
```

#### 特記事項

- 新規に生成したタグはコンポーネントと誤認されやすいため、タグと分かる工夫が必要
- styled-components は、scss の記法も利用できる

## ルーティングの基礎

### 基本的なページ遷移

`react-router-dom`パッケージにより、react ルータを簡潔に利用できる

#### `BrouserRouter`

react ルータを使用する際の基本設定。大元を本コンポーネントでラップする

#### `Link`

リンクを付与する。`to="XXX"`でリンク先を指定する

#### `Routes`と`Route`

`path`で URL を、`element`でレンダリングするコンポーネントを指定する。

```javascript
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### ルート定義の分割

ルーティング処理は、通常 Router.jsx ファイルで管理する。
また、ルーティング先が増える場合、別ファイルで配列で`path`と`element`を管理すると見やすくなる。

```javascript
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {page1Routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={`page1${route.path}`}
            element={route.children}
          />
        );
      })}
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
};
```

### URL パラメータとクエリパラメータ

#### URL パラメータ

ユーザーのマイページなど、アカウントごとに URL が異なる場合、`useParams`で個別の ID を取得できる。

##### 使い方

1. `Route`コンポーネントの`path`で指定する URL を`/:id`に設定する。
2. 指定したリンク先で`useParams()`により ID を取得する。

```javascript
import { Route, Routes } from "react-router-dom";
import { Page2Routes } from "./Page2Routes";
import { Page2 } from "./Page2";
import { UrlParameter } from "./UrlParameter";

export const Router = () => {
  const Page2Routes = [
    {
      path: "/",
      children: <Page2 />,
    },
    {
      path: "/:id",
      children: <UrlParameter />,
    },
  ];
  return (
    <Routes>
      {Page2Routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={`page2${route.path}`}
            element={route.children}
          />
        );
      })}
    </Routes>
  );
};
```

```javascript
import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>URL Parameterページです</h1>
      <p>パラメータは{id}です</p>
    </div>
  );
};
```

#### クエリパラメータ

`Link`で指定した URL にクエリがある場合（https://XXXX?name=hogehoge など）、`useLocation`によりクエリを取得できる。

```javascript
import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
```

```javascript
import { useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>Query Parameterページです</h1>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
```

### 子コンポーネントへの状態受け渡し

`Link`コンポーネントの引数に`state`を追加することで、子コンポーネントにデータを受け渡すことができる。（受け取りは`useLocation()`を用いる）

```javascript
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
    </div>
  );
};
```

```javascript
import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/DetailA" }} state={{ arr }}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/DetailB">DetailB</Link>
    </div>
  );
};
```

### Link を用いないルーティング

`useNavigate`により、`Link`コンポーネントを用いずにルーティングすることができる

```javascript
import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const navigate = useNavigate();
  const onClickDetailA = () => navigate("/page1/DetailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/DetailA" }}>DetailA</Link>
      <br />
      <Link to="/page1/DetailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
```

```javascript
import { useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
```

### 404 エラーへの遷移

`Route`コンポーネントのリンク先として、`path="*"`を指定することで、ページが見つからない場合のリンク先を指定できる。

```javascript
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};
```

```javascript
mport { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
```

## コンポーネントの分割方法（Atomic Design）

### Atomic Design とは

- Brad Frost 氏が考案した最近主流のデザインシステム
- 画面要素を 5 段階に分け、組み合わせることで UI を実現
- コンポーネント化された要素が画面を構成しているという考え方
- モダン JS と相性が良い

### 5 段階のコンポーネント

- ATOMS：ボタン、アイコン、テキストボックス等
- MOLECULES：アイコン＋メニュー名、プロフィール画像＋テキスト等
- ORGANISMS：ツイート入力エリア、サイドメニュー等
- TEMPLATES：ページのレイアウトのみを表現する（データは持たない）
- PAGES：表示される画面

### atomic Design のポイント

- あくまでベース。概念だと認識し、目的にしない
- 始めから分けない
- 要素の関心を意識する

## カスタムフック

### カスタムフックとは

- ただの関数
- hooks の各機能を使用
- コンポーネントからロジックを分離
- 使い回し、テスト容易、見通しが良くなる
- 自由に作れる! use~という名前にする

### カスタムフックの利用例

jsonplaceholder から users データを取得する処理を、`useAllUsers`というカスタムフックに分離する。

```typescript
import "./App.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUsers = () => getUsers();
  return (
    <div className="App">
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました</p>
      ) : loading ? (
        <p>ローディング中</p>
      ) : (
        <>
          <button onClick={onClickFetchUsers}>データ取得</button>
          {userProfiles.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </>
      )}
    </div>
  );
}
```

```typescript
import axios from "axios";
import { useState } from "react";
import { User } from "../types/api/user";
import { userProfile } from "../types/userProfile";

// 全ユーザー一覧を取得するカスタムフック
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<userProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getUsers = () => {
    setLoading(true);
    setError(false);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => {
          return {
            id: user.id,
            name: `${user.name}(${user.username})`,
            email: user.email,
            address: `${user.address.city}${user.address.suite}${user.address.street}`,
          };
        });
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    getUsers,
    userProfiles,
    loading,
    error,
  };
};
```
