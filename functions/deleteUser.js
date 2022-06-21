const { getCollection, headers } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = event.body;
  console.log(body)
  try {
    const list = await data.delete(body);
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify(list),
    };
  } catch (e) {
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
