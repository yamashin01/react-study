import { memo } from "react";

export const Practice2 = memo(() => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice2 = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題2: 返却値の型指定</p>
      <button onClick={onClickPractice2}>練習問題2を実行</button>
    </div>
  );
});
