import { useSelector } from "react-redux"
import { visibleContactItems } from "redux/selectors"
import { ContactListItem } from "components/ContactListItem/ContactListItem"
import css from "./ContactsList.module.css"

export const ContactsList = () => {
  const contacts = useSelector(visibleContactItems);

  return (
    <ul className={css.contacts}>
      {
        contacts.map(contact => <ContactListItem contact={contact} />)
      }
    </ul>
  )
}