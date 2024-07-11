import Modal from './Modal';

interface ErrorModalProps {
    onClear: () => void,
    error: string | null
}

const ErrorModal = ({onClear, error}: ErrorModalProps) => {
  return (
    <Modal
      onCancel={onClear}
      header="An Error Occurred!"
      show={!!error}
      footer={<button type='button' onClick={onClear}>Okay</button>}
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;