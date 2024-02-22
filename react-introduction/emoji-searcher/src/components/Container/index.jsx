import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

Container.prototype = {
  children: PropTypes.node,
};
export default Container;
