import Link from 'next/link';

import styles from './styles.scss';

const Header = () => (
  <header>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/" prefetch>
          <a> Home </a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/count" prefetch>
          <a> Count </a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
