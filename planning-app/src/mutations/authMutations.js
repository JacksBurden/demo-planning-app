import gql from 'graphql-tag';

const SignupMutation = gql`
mutation insert_user($objects: [user_insert_input!]! ) {
  insert_user(objects: $objects) {
    returning {
      userid
      firstName
      lastName
      job
      industry
      salary
    }
  }
}`;

const LoginMutation = gql`
query login_user($email: String!, $password: String!) {
  user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    userid
    firstname
    lastname
    job
    industry
    salary
  }
}`

export { SignupMutation, LoginMutation };
