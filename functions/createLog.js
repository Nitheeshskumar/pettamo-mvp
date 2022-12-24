const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};
  try {
   


    return {
      statusCode: 200,
      body: 'true',
      headers
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
      headers
    };
  }
};
