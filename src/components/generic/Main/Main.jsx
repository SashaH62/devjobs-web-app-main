import styles from "./Main.module.scss";

function Main({ type, children }) {
  return (
    <main className={`${styles.containerMain} ${type ? type : ""}`}>
      {children}
    </main>
  );
}

export default Main;
