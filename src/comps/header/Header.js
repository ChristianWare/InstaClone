import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.content}>
        <div className={styles.left}>Left</div>
        <div className={styles.middle}>Middle</div>
        <div className={styles.right}>Right</div>
      </div>
    </header>
  );
}

export default Header;
