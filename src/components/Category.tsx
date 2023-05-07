import styles from "./components.module.css";

const Category = ({ category }: { category: string }) => {
  return <div className={styles.category}>{category}</div>;
};

export default Category;
