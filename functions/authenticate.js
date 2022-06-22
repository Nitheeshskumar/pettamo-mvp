const { getCollection,headers } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Successful preflight call." }),
    };
  }
  const data = await getCollection();
  console.log('sdfs',event)
  const body = JSON.parse(event.body);
  console.log(body)
  try {
    const user = await data.findOne({ email: { $eq: body.email }});
    console.log(user)
    if(!user){
      return {
        headers,
        statusCode: 401,
        body: JSON.stringify("Email doesn't exist'"),
      };
    }
    if(user.password !== body.password){
      return {
        headers,
        statusCode: 401,
        body: JSON.stringify("Password is wrong"),
      };
    }
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (e) {
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};

