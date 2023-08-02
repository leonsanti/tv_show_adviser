import styles from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
const MAX_TITLE_LENGTH = 20;

export function TVShowListItem({ tvShow, onClick }) {
  const showTitle =
    tvShow.name.length > MAX_TITLE_LENGTH
      ? tvShow.name.slice(0, MAX_TITLE_LENGTH) + "..."
      : tvShow.name;
  const onClick_ = () =>{
    onClick(tvShow);
  }

  return (
    <div onClick={onClick_} className={styles.container}>
      <img
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={styles.img}
      />
      <div className={styles.title}>{showTitle}</div>
    </div>
  );
}
