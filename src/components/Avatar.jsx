import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, ...rest }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
}
