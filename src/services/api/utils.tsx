import {showMessage} from 'react-native-flash-message';

// ** API Config  */
export const config = (contentType?: string) => ({
  headers: {
    'Content-Type': contentType ?? 'application/json',
  },
});

// ** API Error handler  */
export function handler(err: any) {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty('message'))
    error = err.response.data;
  else if (!err.hasOwnProperty('message')) error = err.toJSON();

  showMessage({
    message: error.message,
    type: 'danger',
  });

  return new Error(error.message);
}
