import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import styles from "./style.module.css";

export function TVShowList({ tvShowList }) {
  return (
    <div>
      <div className={styles.title}>You'll probably like: </div>
      <div className={styles.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={styles.tv_show_item} key={tvShow.id}>
              <TVShowListItem
                tvShow={tvShow}
                onClick={() => console.log("todo")}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
