import React from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody , Button} from 'reactstrap';
import { Mutation } from 'react-apollo'
import { TransactionMutation } from '../mutations/transactionMutations';

class TransactionModal extends React.Component {
    constructor(props) {
      super(props);
      this.transactionData = {
          amount: 0,
          startDate: '',
          endDate: null,
          category: '',
          recurring: false,
          userid:1
      }
    }

    // Sets the transactionData instance variable to
    // contents of child form state.
    dataCallback = (data) => {
      this.transactionData = Object.assign(this.transactionData, data);
    }

    render() {
      const { isOpen,  toggle, ComponentForm, name } = this.props;
      // This will be passed into mutator as variables
      // Must be passed as array to Hasura function
      const objects = [this.transactionData]
      return (
      <Modal isOpen={isOpen} toggle={toggle}>
              <ModalHeader toggle={toggle}>Enter {name} Transaction:</ModalHeader>
              <ModalBody>
                {ComponentForm &&
                <ComponentForm dataCallback={this.dataCallback}/>}
              </ModalBody>
              <ModalFooter>
                <Mutation mutation={TransactionMutation} variables={{objects}} onCompleted={() => {toggle()}}>
                  {mutation => {
                    return <Button color="info" onClick={mutation}>Submit {name} Transaction</Button>
                  }}
                </Mutation>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
      );
    }
}

export default TransactionModal;
