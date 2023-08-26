export const saveTokenToLocal = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  export const getLocalStorageToken = () => {
    return localStorage.getItem('authToken');
  };
  
  export const removeTokenFromLocal = () => {
    localStorage.removeItem('authToken');
  };