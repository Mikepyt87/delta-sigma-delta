import React from "react";
import "./Header.css";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <div className="header">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="links">
        <a href="#">MYDELTSIG</a>
        <a href="#">WHAT'S NEW</a>
        <a href="#">LOCATE DELT SIG</a>
        <a href="#">STORE</a>
        <a href="#">DONATE</a>
      </div>
    </div>
  );
};

export default Header;
