import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div className={css.avatar}>
        <img src={avatar} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
