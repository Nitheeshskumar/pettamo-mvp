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
  const body = JSON.parse(event.body);
  console.log(body)
  try {
let query ={rel_type:  { $eq:'provider' }};
if(body.time){
    query.time=  { $eq:body.time };
}
if(body.petType){
    query.petType=  { $eq:body.petType };
}
if(body.serviceType){
    query.serviceType=  { $eq:body.serviceType };
}



    const list = await data.find( query);
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
