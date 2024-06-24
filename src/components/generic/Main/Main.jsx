import styles from "./Main.module.scss";

function Main({ type, children }) {
  return (
    <main className={`${styles.container} ${type ? type : ""}`}>
      {children}
    </main>
  );
}

export default Main;
