
import style from "../style/headerDropdown.module.css";

export default function SearchDropdown() {
  return (
    <div className={style.SearchDropdown}>
      <div>
        <div className={style.cityIcon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <p>SDQ, Santo Domingo</p>
      </div>
      <div>
        <div className={style.cityIcon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <p>SDQ, Santo Domingo</p>
      </div>
      <div>
        <div className={style.cityIcon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <p>SDQ, Santo Domingo</p>
      </div>
    </div>
  );
}
