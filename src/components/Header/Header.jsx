import PropTypes from 'prop-types';
import styles from './Header.module.css';
import codeIcon from '../../assets/icons/code.svg';

/** Шапка сайта: логотип с именем и навигация по разделам страницы. */
function Header({ name, links }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.mark}>
            <img src={codeIcon} alt="" aria-hidden="true" />
          </span>
          {name}
        </a>
        <nav className={styles.nav} aria-label="Основная навигация">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;
