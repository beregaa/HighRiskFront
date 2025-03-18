import User from "../User/User";
import styles from "./BottomMenu.module.scss";
const BottomMenu = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/Home.png" alt="" />

      <img src="/search.png" alt="" />

      <img src="/cart.png" alt="" />

    <div>  <User /></div>
    </div>
  );
};

export default BottomMenu;
