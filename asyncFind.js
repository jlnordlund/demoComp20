//const  csv  = require('csv-parser');
//const  fs  = require('fs');
const csv = require('csvtojson');
const csvFilePath = 'companies-1.csv';
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://jess:beam55bam@cluster0.nvkau.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const array = await csv().fromFile(csvFilePath);

    const database = client.db("stocks");
    const collection = database.collection("companies");
    const result = await collection.insert(array);
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
  } finally {
    await client.close();
  }
}

run().catch(console.dir);


