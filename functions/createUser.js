const { getCollection, headers } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)
  try {
    const user = await data.findOne({ email: { $eq: body.email }});
    if(user){
        return {
          headers,
            statusCode: 400,
            body: JSON.stringify('Email already exists!'),
          };
    }
    const res = await data.create(body.id, body);
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
