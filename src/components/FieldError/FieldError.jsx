import s from "./style.module.css";

export function FieldError(props) {
  return (
    <span className={s.container}> { props.msg } </span>
  );
}
