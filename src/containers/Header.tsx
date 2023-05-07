import Category from "../components/Category";
import styles from "./containers.module.css";
import { ReactComponent as BagShopping } from "../bag-shopping.svg";

const Header = () => {
  const categories = [
    "Summer Finds",
    "Accessories",
    "Dresses",
    "Pants and Lowers",
    "Rompers",
    "Blouses",
  ];

  const mapCategories = categories.map((category) => {
    return <Category category={category} />;
  });
  return (
    <div className={styles.headerMain}>
      <div className={styles.header}>
        <div className={styles.websiteTitle}>RRABIT</div>
        <div className={styles.categories}>{mapCategories}</div>
        <BagShopping
          className={styles.shoppingBag}
          style={{ width: "2vw", filter: "brightness(0) invert(1)" }}
        />
      </div>
    </div>
  );
};

export default Header;
