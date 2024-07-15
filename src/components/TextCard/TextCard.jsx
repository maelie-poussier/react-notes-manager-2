import s from "./style.module.css";
import { useState } from "react";
import {Trash as TrashIcon} from "react-bootstrap-icons";

export function TextCard(props) {
  const [isCardHover, setIsCardHover] = useState(false);
  const [isTrashHover, setIsTrashHover] = useState(false);

  function onClickTrash_(e) {
    props.onClickTrash();
    e.stopPropagation();
  }
  return (
    <div className={`${s.container} card`}
      onClick={props.onClick}
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
      style={{ borderColor: isCardHover ? "#0d6efd" : "transparent"}}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{props.title}</h5>
          <TrashIcon size={20}
            onClick={onClickTrash_}
            onMouseEnter={() => setIsTrashHover(true)}
            onMouseLeave={() => setIsTrashHover(false)}
            style={{color: isTrashHover ? "#FF7373" : "#b8b8b8" }}
          />
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className={`${s.text_content} card-text`}>
          {props.content}
        </p>
      </div>
    </div>
  );
}
