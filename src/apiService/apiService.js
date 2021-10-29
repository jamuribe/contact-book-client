import axios from "axios";
import 'dotenv/config.js';

const url = process.env.REACT_APP_API_URL;

export const getContactsAPI = async () => {
  return await axios.get(url)
    .catch(error => console.log('Error 1.0: ', error))
}

export const updateContactAPI = async (contact) => {
  return await axios.put(`${url}update`, { data: { contact } })
    .catch(error => console.log('Error 2.0: ', error))
}

export const deleteContactAPI = async (contact) => {
  return await axios.delete(`${url}erase`, { data: { contact } })
    .catch(error => console.log('Error 3.0: ', error))
}

export const addContactAPI = async (contact) => {
  return await axios.post(`${url}add`, contact)
    .catch(error => console.log('Error 4.0: ', error))
}

export const createRandomContactAPI = async () => {
  return await axios.post(`${url}random`)
    .catch(error => console.log('Error 5.0: ', error))

}