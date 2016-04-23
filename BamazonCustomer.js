var prompt = require("prompt");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "Bamazon"
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');

  // connection.query("SELECT * FROM Products", function(err, res) {
		// 		  if (err) throw err;
		// 		  console.log(res);
		// });

	prompt.get(["What is the id of the item you would like?", "How many?"], function (err, result) {
	    if (err){
	        console.log(err)
	    }

		var post  = {id: result.id, howMany: result.howMany};
		console.log(post);
		var query = connection.query('INSERT INTO Products SET ?', post, function(err, result) { 
		});

// if (stockQuantity<=0){
// 	console.log(Insufficient quantity);
// }
// else{
// UPDATE Products SET stockQuantity = stockQuantity-result.howMany WHERE id = result.id
// };

	});
});

