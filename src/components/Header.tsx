import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>MusiCol</h1>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/pages">Pages</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.contact}>
        <button className={styles.quoteButton}>Get a Quote</button>
      </div>
    </header>
  );
};

export default Header;
