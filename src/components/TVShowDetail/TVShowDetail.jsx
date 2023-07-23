import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import style from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2
  return (
    <div>
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating}>
        <FiveStarRating rating={rating}/>
        <span>{rating}/5</span>
      </div>
      <div className={style.overview}>
        {tvShow.overview || "Sin descripcion"}
      </div>
    </div>
  );
}
