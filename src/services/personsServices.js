import axios from "axios";

const baseUrl = "http://localhost:30001/persons";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error getting persons from the database", error);
      throw error;
    });
};

const update = (id, objectModified) => {
  return axios
    .put(`${baseUrl}/${id}`, objectModified)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating a person to the database", error);
      throw error;
    });
};

const create = (newObject) => {
  return axios
    .post(baseUrl, newObject)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error adding a person to the database", error);
      throw error;
    });
};

const getRidOf = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error deleting a person", error);
      throw error;
    });
};

export default { getAll, update, create, getRidOf };
