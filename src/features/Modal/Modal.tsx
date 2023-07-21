import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../../context/context';
import styles from './modal.module.css';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`${styles.modalOverlay} ${isModalOpen && styles.showModal}`}>
      <div className={styles.modalContainer}>
        <h3>Modal content</h3>
        <button className={styles.closeModalBtn} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
