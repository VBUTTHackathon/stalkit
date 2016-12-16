module.exports.passport = {
  instagram: {
    strategy: require('passport-facebook').Strategy,
    options: {
      appId: 'APP_ID',
      appSecret: 'APP_SECRET'
    }
  }
}
