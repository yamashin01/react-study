import { memo } from "react";

export const Practice3 = memo(() => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice3 = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題3: 変数の型指定</p>
      <button onClick={onClickPractice3}>練習問題3を実行</button>
    </div>
  );
});
