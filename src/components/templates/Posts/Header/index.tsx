import { OrderBy } from "./OrderBy";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>최신기사목록</h1>
      <div className={styles.orderBy}>
        <OrderBy />
      </div>
    </header>
  );
};
