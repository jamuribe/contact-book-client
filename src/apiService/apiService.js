import axios from "axios";
import 'dotenv/config.js';

const url = process.env.URL;

export const getAllContacts = async () => {
  let contact;
  await axios.get('http://localhost:3001/')
    .then((response) => {
      contact = response.data
    })
  return contact;
}

export const updateContact = async (contact) => {
  await axios.put(`${url}update`, contact)
    .catch(error => console.log('Error 2: ', error))
}

export const deleteContact = async (contact) => {
  await axios.delete(`${url}delete`, contact)
    .catch(error => console.log('Error 3: ', error))
}

export const addContact = async (contact) => {
  await axios.post(`${url}add`, contact)
    .catch(error => console.log('Error 4: ', error))
}

export const createRandomContact = async (id) => {
  await axios.post(`${url}random`, id)
    .catch(error => console.log('Error 4: ', error))

}
