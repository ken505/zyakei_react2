import { useState, useCallback, useMemo } from "react";
import { ChildeArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  // 依存配列は空配列にしているため、最初に読み込まれた時だけ実行される。
  // 引数の変数を依存配列に設定すると、その変数が変わった時にだけ、
  // 再計算される。
  // temp は 4 という値を持ったまま使いまわされる。
  //
  console.log(temp);

  return (
    <div className="App">
      <br />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildeArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
