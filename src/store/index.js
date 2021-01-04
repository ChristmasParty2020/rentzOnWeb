import {
  createStore
} from '@harlem/core';

const STATE = {
  firstName: 'John',
  lastName: 'Smith'
};

const {
  getter,
  mutation,
  ...store
} = createStore('user', STATE);

export const state = store.state;

export const fullName = getter('fullname', state => `${state.firstName} ${state.lastName}`);

export const setFirstName = mutation('setFirstName', (state, payload) => {
  state.firstName = payload || '';
});

export const setLastName = mutation('setLastName', (state, payload) => {
  state.lastName = payload || '';
});
