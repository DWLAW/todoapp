import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getList = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/list.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const getSingleList = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/list/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data)) // will resolve a single object
      .catch(reject);
  });

const createList = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/list.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateList = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/list/${payload.firebaseKey}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteList = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/list/${firebaseKey}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getList, createList, updateList, getSingleList, deleteList };
