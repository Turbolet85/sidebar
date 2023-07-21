import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from '../../context/context';
import styles from './home.module.css';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className={styles.sidebarToggle}>
        <FaBars />
      </button>
      <button onClick={openModal} className={`btn`}>
        show modal
      </button>
    </main>
  );
};

export default Home;
