function getUserFromPromise(promise) {
  return {
    id: promise.id,
    username: promise.username,
    password: promise.password,
  };
}

module.exports = { getUserFromPromise };
