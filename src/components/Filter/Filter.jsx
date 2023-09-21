import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";
import css from "./Filter.module.css"

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={filter} onChange={event => {dispatch(changeFilter(event.target.value))}} />
    </label>
  )
}