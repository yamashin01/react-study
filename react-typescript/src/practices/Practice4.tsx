import { memo } from "react";

export const Practice4 = memo(() => {
  const calcTotalFee = (num: any) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice4 = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題4: 設定ファイルを触ってみる</p>
      <button onClick={onClickPractice4}>練習問題4を実行</button>
    </div>
  );
});
