import s from "./style.module.css";
import { Search  as SearchIcon} from "react-bootstrap-icons"

export function SearchBar(props) {
  return (
    <>
      <SearchIcon size={25} className={s.icon}/>
      <input
        type="text"
        className={s.input}
        onChange={(e) => props.onTextChange(e.target.value)}
        placeholder={props.placeholder}
      />
    </>
  );
}
