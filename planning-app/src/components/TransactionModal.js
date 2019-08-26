import React from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody , Button} from 'reactstrap';

const TransactionModal = (props) => {
  const { isOpen, type, toggle, ComponentForm, name } = props;

  return (
  <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Enter {name} Transaction:</ModalHeader>
          <ModalBody>
            {ComponentForm &&
            <ComponentForm/>}
          </ModalBody>
          <ModalFooter>
            <Button color="info">Submit {name} Transaction</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
  );
}

export default TransactionModal;
