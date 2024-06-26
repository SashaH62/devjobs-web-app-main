import Button from "../Button/Button";
import styles from "./GenericMessage.module.scss";

function GenericMessage({ children, cta }) {
  return (
    <div className={styles.genericMessageContainer}>
      <p>{children}</p>
      <Button>Refresh 🔁</Button>
    </div>
  );
}

export default GenericMessage;
