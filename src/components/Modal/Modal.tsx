import { Modal as ModalContainer } from 'react-native-paper';

import styles from './Modal.styles';

interface ModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const Modal = ({ children, isVisible, onClose }: ModalProps) => {
  return (
    <ModalContainer
      visible={isVisible}
      onDismiss={onClose}
      overlayAccessibilityLabel="Close"
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {children}
    </ModalContainer>
  );
};

export default Modal;
