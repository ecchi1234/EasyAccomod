import axios from "axios";
export const checkLogin = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://localhost:5000/api/Login/check")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
