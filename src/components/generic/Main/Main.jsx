import styles from "./Main.module.scss";

function Main({ children }) {
  return <main className={styles.containerMain}>{children}</main>;
}

export default Main;
