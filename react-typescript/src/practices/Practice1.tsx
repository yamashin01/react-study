import { memo } from "react";

export const Practice1 = memo(() => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice1 = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題1: 引数の型指定</p>
      <button onClick={onClickPractice1}>練習問題１を実行</button>
    </div>
  );
});
