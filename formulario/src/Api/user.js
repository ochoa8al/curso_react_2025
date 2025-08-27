const SERVER = "http://localhost:3000";
const API_URL = `${SERVER}/api/users`;

export const createUser = (data) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export const getUsers = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const getUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const updateUser = (id, data) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export const deleteUser = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};
