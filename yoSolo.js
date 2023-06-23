database = [
	{
		username: "Carol",
		password: "guapa"
	},
	{
		username: "David",
		password: "king"
	},
	{
		username: "Ronald",
		password: "MacDonald"
	}
]

newsfeed = [
	{
		username: "Carol",
		timeline: "Muy bien amor, asi se hace"
	},
	{
		username: "David",
		timeline: "lo estoy haciendo yo solito"
	},
	{
		username: "Ronald",
		timeline: "Quiero una hamburguesa"
	}
]

var userNamePrompt = prompt("What is your username");
var userPasswordPrompt = prompt("what is your password");

function isUserValid (username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	} return false
};

function signIn (username, password) {
	if (isUserValid(username, password) === true) {
		console.log(newsfeed);
	} else {alert("sorry wrong username or password")}
};

signIn (userNamePrompt, userPasswordPrompt);

