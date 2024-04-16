// register("chat", (event, player, amount, rank) => {
// 	const message = ChatLib.getChatMessage(event);
// 	if (message.match(/You received/)) {
// 		ChatLib.command("ac Thanks for the cookies " + player + "!");
// 	}
//   });

// var cookieMessage = "Thanks for the cookies "

// register("chat", (player, rank, event) => {
// 	ChatLib.say(cookieMessage + player + "!")
// }).setCriteria(/You received ${amount} cookies from ${rank} ${player}!/);



// register("chat", (player, rank, event) => {
// 	ChatLib.command('ac ' + cookieMessage + player + "!")
// }).setCriteria("You received ${amount} cookies from ${rank} ${player}!");

// register('chat', (event) => {
//   ChatLib.say(`Thanks for the cookies ${player}! <3`);
// }).setCriteria('You received ${amount} cookies from ${player}!');

// no idea if this works, will test out later