import styles from "./FormInput.module.scss";
import PropTypes from "prop-types";

export const FormInput = ({ label, register, fieldName }) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...register(fieldName)} />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  register: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};
