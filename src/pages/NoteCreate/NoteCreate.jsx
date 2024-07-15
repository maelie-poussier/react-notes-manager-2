import s from "./style.module.css";
import { NoteForm } from "../../components/NoteForm/NoteForm";
import { NoteAPI } from "../../api/note-api";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/note/note-slice";
import { useNavigate } from "react-router-dom";

export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function createNote(formValues) {
    const createNote = await NoteAPI.create({...formValues, created_at: new Date().toLocaleDateString() });
    dispatch(addNote(createNote));
    navigate("/");
  }

  return <> < NoteForm title="Create a note" onSubmit={createNote}/> </>
}
