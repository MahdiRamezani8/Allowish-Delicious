import { useMenu } from "../../contexts/MenuContext";
import { useNav } from "../../contexts/NavContext";
import Button from "../Button/Button";
import Header from "../Header/Header";
import MenuList from "../MenuList.jsx/MenuList";
import styles from "./Menu.module.css";

function Menu() {
  const { items } = useMenu();
  const { headerRef } = useNav();

  return (
    <>
      <Header elRef={headerRef} />

      <main className={styles.menu}>
        {items.map((item, i) => (
          <MenuList key={i} items={item.items} title={item.title} />
        ))}

        <Button type="primary"> Order Now </Button>
      </main>
    </>
  );
}

export default Menu;
