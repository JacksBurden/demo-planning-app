import SingleTransactionForm from '../components/forms/SingleTransactionForm';
import RecurringTransactionForm from '../components/forms/RecurringTransactionForm'
// Allows some flexibility for more transaction types to be added in the future
const transactionTypes = { oneTime:
                            { name: 'One Time',
                              text: 'Enter transactions that occurred one time, like a bill at a restaurant or a new pair of pants.',
                              form: SingleTransactionForm
                            },
                           recurring:
                              { name: 'Recurring',
                                text: 'Enter transactions that are recurring, such as cable and phone bills, subscription services, and gym memberships',
                                form: RecurringTransactionForm
                              }
                          };

export default transactionTypes;
