import searchIcon from "../../assets/search-icon.svg";
import emojiIcon from "../../assets/emoji-icon.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img style={{ marginRight: 8 }} src={emojiIcon} alt="emoji icon" className={styles.navIcon} />
      <img style={{ marginTop: 3 }} src={searchIcon} alt="search icon" className={styles.navIcon} />
      <span className={styles.navTitle}>er</span>
    </nav>
  );
};

export default Navbar;
