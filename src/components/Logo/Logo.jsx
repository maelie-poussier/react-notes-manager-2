import s from "./style.module.css";
export function Logo(props) {
  return (
    <div onClick={props.onClick}>
      <div className={s.container}>
        <img className={s.img} src={props.image} alt="logo" />
        <div className={s.logo_txt}>{props.title}</div>
      </div>
      <div className={s.subtitle}>{props.subtitle}</div>
    </div>
  );
}
