// include and initialize the rollbar library with your access token
import Rollbar from 'rollbar';

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_API_KEY,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

export default rollbar;
