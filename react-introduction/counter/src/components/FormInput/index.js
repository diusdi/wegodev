import PropTypes from "prop-types";
import styles from "./FormInput.module.css";
const FormInput = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} type="text" placeholder="List" onChange={onChange} value={value} />
      <button className={styles.addButton} type="submit">
        add
      </button>
    </form>
  );
};

FormInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormInput;
