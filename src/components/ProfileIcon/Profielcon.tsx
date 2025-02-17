import styles from "./Profielcon.module.scss";

type Props = {
  user: any;
};

const ProfileIcon = (props: Props) => {
  return (
    <div className={styles.profile}>
      <div> {props.user && props.user.username}</div>
    </div>
  );
};

export default ProfileIcon;
