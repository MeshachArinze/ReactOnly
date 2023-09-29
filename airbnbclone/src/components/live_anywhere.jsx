/* eslint-disable no-unused-vars */

import { useState } from "react";
import style from "../style/liveAnyWhere.module.css";

export default function LiveAnywhere() {
  const [data, setData] = useState([
    { id: 1, image: "entireHome.webp", title: "Entire homes" },
    { id: 2, image: "cabin.webp", title: "Cabins and cottages" },
    { id: 3, image: "unique.webp", title: "Unique stays" },
    { id: 4, image: "pets.webp", title: "Pets Welcome" },
  ]);
  return (
    <div className={style.LiveAnywhere}>
      <h1>Live anywhere</h1>
      <div style={{ overflow: "auto" }}>
        <div className="row m-0" style={{ minWidth: "750px" }}>
          {data.map((item) => (
            <div key={item.id} className="col-3">
              <div className={style.LiveAnywhereCard}>
                <img src={`/images/${item.image}`} alt="" />
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
