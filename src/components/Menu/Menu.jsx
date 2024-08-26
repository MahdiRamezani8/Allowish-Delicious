import { useMenu } from "../../contexts/MenuContext";
import Button from "../Button/Button";
import MenuList from "../MenuList.jsx/MenuList";
import styles from "./Menu.module.css";

function Menu() {
  const { items } = useMenu();

  if (items.length)
    return (
      <main className={styles.menu}>
        {items.map((item) => (
          <MenuList items={item.items} title={item.title} key={item.id} />
        ))}

        <Button type="primary"> Order Now </Button>
      </main>
    );

  return "";
}

export default Menu;
