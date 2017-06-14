if (RF_ENVIRONMENT === 'development') {
  require('./index.dev')
} else {
  require('./index.default')
}
