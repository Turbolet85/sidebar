import { FaTimes } from 'react-icons/fa';

import logo from '../../assets/logo.svg';
import { useGlobalContext } from '../../context/context';
import { links, social } from '../../data/data';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen && styles.showSidebar}`}>
      <div className={styles.sidebarHeader}>
        <img src={logo} alt="coding" className={styles.logo} />
        <button className={styles.closeBtn} onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className={styles.links}>
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={styles.socialLinks}>
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
