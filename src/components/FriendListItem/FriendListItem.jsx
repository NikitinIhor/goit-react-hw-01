import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const isOnlineClsx = clsx(isOnline ? css.online : css.offline);
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnlineClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
