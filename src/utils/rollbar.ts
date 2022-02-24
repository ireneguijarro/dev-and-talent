// include and initialize the rollbar library with your access token
import Rollbar from 'rollbar';

const rollbar = new Rollbar({
  accessToken: '963694d9023346de90786e2470f5da66',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!');
