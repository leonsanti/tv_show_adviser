import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import style from "./style.module.css";
import logoImg from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    console.log(popularTVShowList);
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow);
  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo img={logoImg} title="Watowatch" subtitle="Find a show you may like" />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>
       { currentTVShow && <TVShowDetail tvShow={currentTVShow} /> }
      </div>
      <div className={style.recommended_tv_shows}>Recommended to you</div>
    </div>
  );
}
