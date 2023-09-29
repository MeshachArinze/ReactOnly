
/* eslint-disable react/prop-types */

import { useState } from "react";
import style from "../style/responsiveHeader.module.css";
import HeaderDropdown from "./header_dropdown";
import SearchDropdown from "./search_dropdown";

export default function ResponsiveHeader({ translateHeader }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchInput, setSearchDropdownInput] = useState(false);

  const onChange = (e) => {
    setSearchDropdownInput(e.target.value);
  };
  return (
    <>
      <div
        className={style.ResponsiveHeader}
        style={{
          backgroundColor: dropdownVisible ? "#ffffff" : "",
          bottom: dropdownVisible ? "0" : "",
        }}
      >
        <div className="d-flex align-items-center py-2">
          <div
            className={style.searchContainer}
            onClick={() => setDropdownVisible(true)}
            style={{
              boxShadow: translateHeader ? "0px 2px 5px rgba(0,0,0,0.5)" : "",
              backgroundColor: dropdownVisible ? "#F7F7F7" : "",
              border: dropdownVisible ? "1px solid #cccccc" : "",
              // eslint-disable-next-line no-dupe-keys
              boxShadow: dropdownVisible ? "" : "0px 2px 5px rgba(0,0,0,0.5)",
            }}
          >
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="where are you going?"
              onChange={onChange}
            />
          </div>
          {dropdownVisible ? (
            <button onClick={() => setDropdownVisible(false)}>CANCEL</button>
          ) : (
            ""
          )}
        </div>
        {dropdownVisible ? (
          searchInput.length > 0 ? (
            <SearchDropdown />
          ) : (
            <HeaderDropdown />
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}
