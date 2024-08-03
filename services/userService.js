const repository = require("../repositories/userRepository");

async function createUser(json) {
  try {
    const user = JSON.parse(json);
    console.log(user);
    const response = createResponse200(200, "OK", await repository.save(user));
    console.log(response);
    return response;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

function createResponse200(status, statusText, data) {
  const response = new Response(data);
  response.status = status;
  response.statusText = statusText;
  return response;
}

module.exports = { createUser };
