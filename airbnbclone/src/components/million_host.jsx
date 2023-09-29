/* eslint-disable no-unused-vars */


import React, { useState } from "react";
import style from "../style/millionHost.module.css";

export default function MillionHost() {
  const [data, setData] = useState([
    { id:1, image: "hostHome.webp", title: "Host your home" },
    { id:2, image: "hostOnlineExperience.webp", title: "Host an Online Experience" },
    { id:3, image: "hostExperience.webp", title: "Host an Experience" },
  ]);
  return (
    <div className={style.MillionHost}>
      <h1>Join millions of hosts on Airbnb</h1>
      <div style={{ overflowX: "auto" }}>
        <div className="row m-0" style={{ minWidth: "750px" }}>
          {data.map((item) => (
            <div key={item.id} className="col-4 px-2">
              <div className={style.MillionHostCard}>
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
