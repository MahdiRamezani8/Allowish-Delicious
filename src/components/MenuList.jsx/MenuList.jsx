import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuList.module.css";
function MenuList({ items, title }) {
  return (
    <ul className={styles.menuList}>
      <h1>{title}</h1>
      {items.map((item, i) => (
        <MenuItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default MenuList;
