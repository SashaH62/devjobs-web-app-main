import styles from "./GenericTextInput.module.scss";

function GenericTextInput({ name, placeholder, icon, onChangeEvent, value }) {
  return (
    <div className={styles.inputContainer}>
      {icon && <img src={icon} alt="icon" />}
      <input
        name={name}
        placeholder={placeholder}
        className={styles.genericTextInput}
        type="text"
        value={value}
        onChange={onChangeEvent}
      />
    </div>
  );
}

export default GenericTextInput;
