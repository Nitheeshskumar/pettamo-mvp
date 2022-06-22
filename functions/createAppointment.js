const { getCollection ,headers } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Successful preflight call." }),
    };
  }
  const data = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)

  try {
    const res = await data.create(body.id,body);
    console.log(res)
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
