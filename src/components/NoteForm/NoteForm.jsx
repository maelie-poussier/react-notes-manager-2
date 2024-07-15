import s from "./style.module.css";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary"
import { PencilFill, Trash, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { FieldError } from "../FieldError/FieldError"



export function NoteForm({isEditable = true, title, onClickEdit, onClickTrash, onSubmit, note}) {

  const [formValues, setFormValues] = useState({title: note ? note.title : "", content: note ? note.content : ""})
  const [formErrors, setFormErrors] = useState({title: note?.title ? undefined : "", content: note?.content ? undefined : ""})

  function hasError() {
    return Object.values(formErrors).some(error => error !== undefined);
  }

  const actionIcons = ( <>
    <div className="col-1">
      { onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon}/>}
    </div>
    <div className="col-1">
      { onClickTrash && <TrashFill onClick={onClickTrash} className={s.icon}/>}
    </div>
  </>);

  const titleInput = ( <div className="mb-5">
    <label className="form-label">Title</label>
    <input
            type="text" name="title"
            className="form-control"
            value={formValues.title} />
    <FieldError msg={formErrors.title} />
  </div>);

  const contentInput = ( <div className="mb-5">
    <label className="form-label">Content</label>
    <textarea
              type="text"
              name="content"
              className="form-control"
              row="5"
              value={formValues.content} />
    <FieldError msg={formErrors.content} />
  </div>);

  const submitButton = ( <div className={s.submit_btn}>
    <ButtonPrimary isDisabled={hasError()} onClick={() => onSubmit(formValues)}> Submit </ButtonPrimary>
  </div> );

  return (
    <form className={s.container}>
      <div className="row jusitfy-content-space-between">
        <div className="col-10"><h2 className="mb-3">{title}</h2></div>
        { actionIcons }
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>{ isEditable && titleInput }</div>
      <div className="mb-3">{ (isEditable) ? contentInput : <p>{note.content}</p> }</div>
      { onSubmit && submitButton }
    </form>
  );
}
