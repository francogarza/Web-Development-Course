// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
	{
		name: "Franco Garza",
		phone: "123412341234",
		email: "francogarza@gmail.com",
		uid: 1
	}
];

var waitingList = [
	{
		name: "Diego Garza",
		phone: "192819281982",
		email: "diegogarza@gmail.com",
		uid: 3
	}
];

// paginas html
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
});

// post
app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
  
    console.log(newReservation);
    
    if (reservations.length < 5) {
        reservations.push(newReservation);
        res.json(true);
    } else {
        waitingList.push(newReservation);
        res.json(false);
    }
  
});

// api
app.get("/api/tables", function(req, res) {
	return res.json(reservations)
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitingList);
});

// escucha
app.listen(PORT, function() {
	console.log("Listening PORT " + PORT);
});