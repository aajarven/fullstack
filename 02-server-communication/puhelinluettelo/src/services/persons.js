import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

function getAll() {
  return axios.get(baseUrl)
}

function create(newObject) {
  return axios.post(baseUrl, newObject)
}

function deletePerson(id) {
  return axios.delete(`${baseUrl}/${id}`)
}

const personService = {
  getAll: getAll,
  create: create,
  delete: deletePerson,
}

export default personService;
