import styles from "./containers.module.css";

const ShopProductPage = () => {
  return (
    <div className={styles.shopProduct}>
      <div>
        <img src="/dress.png" alt="product img" className={styles.productImg} />
      </div>
      <div className={styles.productDetails}>New Collection</div>
    </div>
  );
};

export default ShopProductPage;
