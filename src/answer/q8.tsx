/* 泛型 generics */
/* 对 UseState 使用正确的泛型以消除错误 */

type UseState = <T>(v: T) => [T, (v: T) => void];

const useState: UseState = (v) => {
  return [
    v,
    (v) => {
      //...
    }
  ];
};

export const Component = () => {
  const [num, setNum] = useState(0); // OK
  const [str, setStr] = useState(""); // OK
  const [list, setList] = useState([1, 2, 3]); // OK

  // test
  const newNum = num + 1;
  setNum(newNum);

  const newStr = str.toUpperCase();
  setStr(newStr);

  const newList = list.slice(1);
  setList(newList);
};
