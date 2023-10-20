/* React 组件 Props */
/* 为下面的函数组件添加合适的 Props 类型 */

interface Props {
  onClick?: unknown;
  disabled?: unknown;
  children?: unknown;
  style?: unknown;
}
const Button = ({ onClick, disabled, children, style }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
};
export default Button;
