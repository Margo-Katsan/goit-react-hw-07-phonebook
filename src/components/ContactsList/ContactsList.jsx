import { useSelector } from "react-redux"
import { selectVisibleContactItems } from "redux/selectors"
import { ContactListItem } from "components/ContactListItem/ContactListItem"
import css from "./ContactsList.module.css"

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContactItems);

  return (
    <ul className={css.contacts}>
      {
        contacts.map(contact => <ContactListItem contact={contact} />)
      }
    </ul>
  )
}