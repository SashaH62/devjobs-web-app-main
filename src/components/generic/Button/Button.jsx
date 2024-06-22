import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

function Button({ onClick, link, type = "primary", children }) {
  const buttonTypeClass = styles[type] || styles.primary;

  if (link) {
    return (
      <Link to={link}>
        <button className={buttonTypeClass} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonTypeClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
