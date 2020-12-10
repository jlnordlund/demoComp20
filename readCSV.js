var csv = require('csv-parser');
var fs = require('fs');

fs.createReadStream('companies-1.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });