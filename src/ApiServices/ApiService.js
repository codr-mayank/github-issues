import axios from "axios";

export const getIssuesData = () => {
  let data = axios.get('https://api.github.com/repos/facebook/react/issues')
    .then(res => {
      if (res && res.status === 200 && res.data) {
        return res.data;
      }
    });

  return data;
};
