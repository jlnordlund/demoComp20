const csv = require('csvtojson');
const csvFilePath = 'companies-1.csv';
const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://jess:beam55bam@cluster0.nvkau.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const array = await csv().fromFile(csvFilePath);

    const database = client.db("stocks");
    const collection = database.collection("companies");
    const result = await collection.insert(array);
    console.log("inserted");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);


