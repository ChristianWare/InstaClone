import Image from "next/image";
import styles from "./Header.module.css";
import insta from "../../../public/images/instaLogo.png";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image src={insta} className={styles.logo} width={140} height={50} />
        </div>
        <div className={styles.middle}>Middle</div>
        <div className={styles.right}>Right</div>
      </div>
    </header>
  );
}

export default Header;
