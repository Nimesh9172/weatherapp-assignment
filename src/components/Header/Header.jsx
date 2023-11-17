import classes from "./Header.module.css";
import { LocationIcon, SearchIcon } from "../SvgIcons";

const Header = () => {
  return (
    <header>
      <div className={classes.locationWrapper}>
        <div className={classes["location-title"]}>
          <LocationIcon />
          <h3>Agra, Uttar Pradesh</h3>
        </div>
        <p className={classes.latlng}>{`27°10'36'' N & 78°0'29'' E`}</p>
      </div>
      <div className={classes["input-wrapper"]}>
        <input type="text" placeholder="Search your city here.." />
        <div className={classes.srcicon}>
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
