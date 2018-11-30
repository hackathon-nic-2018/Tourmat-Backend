var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/tourMat";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("Propietario").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.noCedula);
    db.close();
  });
});