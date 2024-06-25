import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles.genericLoaderContainer}>
      <p>Loading... 🚀</p>
    </div>
  );
}

export default Loader;
