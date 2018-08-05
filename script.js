


// Facebook app

var database = [
	{
		username: "kings",
		password: "supersecret"
	},
	{
		username: "Chisom",
		password: "secret"
	},
	{
		username: "Salome",
		password: "super"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired after work today"
	},
	{
		username: "Sally",
		timeline: "Javascript is soooo cool!"
	},
	{
		username: "Chisom",
		timeline: "Javascript is pretty cool!"
	}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	for (var i = 0; i < database.length; i++)
		if (database[i].username === username &&
			database[i].password === password) {
			console.log(newsFeed);
		}
		else {
			alert("Sorry, wrong password and username")
		}
	//if (user === database[0].username && 
	//	pass === database[0].password) {
	//	console.log(newsFeed);
	//} else {
	//	alert("Sorry, wrong username and password!");
	
}

signIn(userNamePrompt, passwordPrompt);

