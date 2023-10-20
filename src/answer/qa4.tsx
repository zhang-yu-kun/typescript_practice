/* React 组件 Props 范型 */

import { useState } from "react";

// value 可为字符串或数字
type Value = number | string;
interface Props<T extends Value> {
  value?: T;
  onChange?: (v: T) => void;
  type?: "number" | "text";
}

const Input = <T extends Value>({
  value,
  onChange,
  type = "text"
}: Props<T>) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        const { value } = e.target;
        onChange?.((type === "number" ? parseInt(value, 10) : value) as T);
      }}
      type={type}
    />
  );
};

// test
const Test = () => {
  const [num, setNum] = useState(0);
  const [str, setStr] = useState("");

  return (
    <div>
      <Input value={num} onChange={(v) => setNum(v)} type="number" />
      <Input value={str} onChange={(v) => setStr(v)} />
    </div>
  );
};

export default Input;
