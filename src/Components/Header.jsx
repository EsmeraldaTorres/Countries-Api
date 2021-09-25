import React from "react"
import { Link } from "react-router-dom";
import PublicIcon from '@material-ui/icons/Public';

//Styles
import "../styles/header.css";

const Header = props => {
  return (
    <header>
      <Link to="/">CountryAPI</Link>
      <PublicIcon className="world-icon" />
    </header>
  );
};

export default Header;
