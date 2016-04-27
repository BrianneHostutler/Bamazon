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


prompt.start();

prompt.get(["id", "howMany"], function (err, result) {
	if (err){
	    console.log(err)
	}

	var CustomerPickID = parseInt(result.id);
	var CustomerQuantity = parseInt(result.howMany);

	console.log("id=" + CustomerPickID, "how many=" + CustomerQuantity);

	function selectID(){
		connection.query('SELECT * FROM Products WHERE ItemID =' + CustomerPickID, function(err, res) { 
				if (err) throw err;
				console.log(res);
				want = CustomerQuantity;
       			have = res[0].StockQuantity;
       			newQuantity = have - want;
       			if (newQuantity >= 0){
	          		console.log('Ok! We have enough '+res[0].ProductName+' in stock.');
	          	}	
       			else if(want>have && have !=0){
				    console.log('Insufficient quantity. We only have '+have+' in stock.');
			  	}
			  	else{
		          return false
		        }
		});
	};
	selectID();	
	});
});
