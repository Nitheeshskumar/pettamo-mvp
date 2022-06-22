const { getCollection, headers } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Successful preflight call." }),
    };
  }

  const data = await getCollection();

  try {

    const res = await data.find({ rel_type: { $eq: 'owner' }});
    const list = Object.keys(res).map(el=>res[el])
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
