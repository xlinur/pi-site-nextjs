import Modal from '@/app/components/Modal';
import SuccessMessage from '@/app/components/SuccessMessage';

const SuccessModal = ({ id, title, message }) => {
  return (
    <Modal id={id}>
      <SuccessMessage title={title} message={message} />
    </Modal>
  );
};

export default SuccessModal;
