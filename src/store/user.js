import {
  transaction
} from '@harlem/plugin-transaction';

import {
  setUserDetails,
  setUserPermissions
} from './mutations';

import {
  getUserDetails,
  getUserPermissions
} from './services';

/*
The setUserPermissions has an error in it causing
the transaction to fail in which case the user details
mutation will be rolled back.
*/
const setUserData = transaction('setUserData', payload => {
  const {
    details,
    permissions
  } = payload;

  setUserDetails(details);
  setUserPermissions(permissions);
});

/*
Here is an example action that loads some data
about a user and updates the store
*/
export async function loadUserData(userId) {
  const [
    details,
    permissions
  ] = await Promise.all([
    getUserDetails(userId),
    getUserPermissions(userId),
  ]);

  setUserData({
    details,
    permissions
  });
}
