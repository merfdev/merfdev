import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="reactjs.com">reactjs</a> | merfdev
      </p>
    </div>
  );
}

export default Header;
