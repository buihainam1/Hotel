import axios from 'axios';
import { API_BASE_URL } from '@/config/ServerApiConfig';


function findKeyByPrefix(object, prefix) {
  for (var property in object) {
    if (object.hasOwnProperty(property) && property.toString().startsWith(prefix)) {
      return property;
    }
  }
}

function includeToken() {
  axios.defaults.baseURL = API_BASE_URL;

  axios.defaults.withCredentials = true;
  // const auth = storePersist.get('auth');

  // if (auth) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${auth.current.token}`;
  // }
}

const request = {
  create: async ({ entity, jsonData }) => {
    try {
      includeToken();
      const response = await axios.post(entity + '/create', jsonData);
      
      return response.data.result;
    } catch (error) {
      
    }
  },
  createAndUpload: async ({ entity, jsonData }) => {
    try {
      includeToken();
      const response = await axios.post(entity + '/create', jsonData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Confirm create');
      
      return response.data;
    } catch (error) {
      
    }
  },
  read: async ({ entity, id }) => {
    try {
      includeToken();
      const response = await axios.get(entity + '/read/' + id);
      
      return response.data;
    } catch (error) {
      
    }
  },
  update: async ({ entity, id, jsonData }) => {
    try {
      includeToken();
      const response = await axios.put(entity + '/update/' + id, jsonData);
      
      return response.data;
    } catch (error) {
      
    }
  },
  updateAndUpload: async ({ entity, id, formDataa }) => {
    try {
      includeToken();
      console.log('data :' + formDataa);
      const response = await axios.patch(entity + '/update/' + id, formDataa, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      
    }
  },

  delete: async ({ entity, id }) => {
    try {
      includeToken();
      const response = await axios.delete(entity + '/delete/' + id);
      
      return response.data;
    } catch (error) {
      
    }
  },

  filter: async ({ entity, options = {} }) => {
    try {
      includeToken();
      let filter = options.filter ? 'filter=' + options.filter : '';
      let equal = options.equal ? '&equal=' + options.equal : '';
      let query = `?${filter}${equal}`;

      const response = await axios.get(entity + '/filter' + query);
      
      return response.data;
    } catch (error) {
      
    }
  },

  search: async ({ entity, options = {} }) => {
    try {
      includeToken();
      let query = '?';
      for (var key in options) {
        query += key + '=' + options[key] + '&';
      }
      query = query.slice(0, -1);
      // headersInstance.cancelToken = source.token;
      const response = await axios.get(entity + '/search' + query);

      
      return response.data;
    } catch (error) {
      
    }
  },

  list: async ({ entity, options = {} }) => {
    console.log("Đã gọi 1");
    try {
      includeToken();
      console.log("Đã gọi 2");
      let query = '?';
      for (var key in options) {
        query += key + '=' + options[key] + '&';
      }
      query = query.slice(0, -1);

      const response = await axios.get(entity + query);
      console.log("Đã gọi");
      
      return response.data;
    } catch (error) {
      
    }
  },
  listAll: async ({ entity, options = {} }) => {
    try {
      includeToken();
      let query = '?';
      for (var key in options) {
        query += key + '=' + options[key] + '&';
      }
      query = query.slice(0, -1);

      const response = await axios.get(entity + '/listAll' + query);

      
      return response.data;
    } catch (error) {
      
    }
  },

  post: async ({ entity, jsonData }) => {
    try {
      includeToken();
      const response = await axios.post(entity, jsonData);

      return response.data;
    } catch (error) {
      
    }
  },
  get: async ({ entity }) => {
    try {
      includeToken();
      const response = await axios.get(entity);
      return response.data;
    } catch (error) {
      
    }
  },
  patch: async ({ entity, jsonData }) => {
    try {
      includeToken();
      const response = await axios.patch(entity, jsonData);
      
      return response.data;
    } catch (error) {
      
    }
  },

  upload: async ({ entity, id, jsonData }) => {
    try {
      includeToken();
      const response = await axios.patch(entity + '/upload/' + id, jsonData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      return response.data;
    } catch (error) {
      
    }
  },

  source: () => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    return source;
  },

  summary: async ({ entity, options = {} }) => {
    try {
      includeToken();
      let query = '?';
      for (var key in options) {
        query += key + '=' + options[key] + '&';
      }
      query = query.slice(0, -1);
      const response = await axios.get(entity + '/summary' + query);

     

      return response.data;
    } catch (error) {
      
    }
  },

  mail: async ({ entity, jsonData }) => {
    try {
      includeToken();
      const response = await axios.post(entity + '/mail/', jsonData);
      
      return response.data;
    } catch (error) {
      
    }
  },

  convert: async ({ entity, id }) => {
    try {
      includeToken();
      const response = await axios.get(`${entity}/convert/${id}`);
      
      return response.data;
    } catch (error) {
      
    }
  },
};
export default request;
