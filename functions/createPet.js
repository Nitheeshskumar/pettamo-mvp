const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const todos = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)

  try {
    const res = await todos.create(body.id,body);
    // const list = await todos.find( {rel_type:  { $eq:'pet' },rel_id:{ $eq:body.rel_id }   });
    const list = await todos.find( {$and: [{rel_type:  { $eq:'pet' },rel_id:{ $eq:body.rel_id }   }] } );
    console.log(res)
    // const list = await todos.get( `${body.id}/todos`);
    return {
      statusCode: 200,
      body: JSON.stringify(list),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
