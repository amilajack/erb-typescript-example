export default (
  process.env.NODE_ENV === 'production'
    ? require('./configureStore.production')
    : require('./configureStore.development')
);
