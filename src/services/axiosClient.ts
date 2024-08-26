import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const createAxiosClient = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    timeout: 10000, // 10 seconds
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// request functions
export const performGetRequest = async <T>(
  axiosClient: AxiosInstance,
  config: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosClient.get(config.url!, config);
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error; // Allow specific functions to handle this error
  }
};



export const handleGetError = (error: any, requestContext: string) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      throw new Error('Resource not found.');
    }
    if (error.response?.status === 401) {
      throw new Error('Unauthorized.');
    }
    if ((error.response?.status ?? 0) < 500 && (error.response?.status ?? 0) >= 400) {
      throw new Error('Client error.');
    }
    if ((error.response?.status ?? 0) < 600 && (error.response?.status ?? 0) >= 500) { //correct or just use 500 ?
      throw new Error('Server error.');
    }
    // Handle other Axios errors (like network error, timeout, etc.) ..?
    // if (error.response === undefined) {
    //   throw new Error(`${requestContext}: No response from the server.`);
    // }
  }
  throw new Error(`${requestContext}: Something went wrong with the GET request.`);
};

// const axiosClient = axios.create({
//   baseURL: 'https://fakestoreapi.com', // for now hardcode it here, since its not sensitive data
//   timeout: 10000, // 10 seconds
//   headers: {
//     'Content-Type': 'application/json', 
//   },
// });

// export default axiosClient;