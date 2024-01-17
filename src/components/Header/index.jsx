import Logo from "../../assets/nuKenzie.svg";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container"><img src={Logo} alt="Logo NuKenzie" /></div>
      
    </header>
  );
};
