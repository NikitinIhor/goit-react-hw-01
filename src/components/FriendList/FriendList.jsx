import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
}
