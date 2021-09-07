var facebookProfile = {
  name: "Kafeero Emma",
  friends: 234,
  messages: ["coming home","tell ur boys","tusimbude","anti kale","byebyo","akathala"],
  postMessage: function(){
    sendText = this.messages.push("mechanic");
    return sendText;
  },
  deleteMessage: function(){
    bounceMessage = this.messages.splice()
    return bounceMessage;
  },
  addFriend: function(){
    oneMore = this.friends.push()
    return oneMore;
  },
  removeFriend: function(){
    takeOne = this.friends.pop()
    return takeOne;
  }
  
};
//console.log(facebookProfile.postMessage());
console.log(facebookProfile.addFriend("peter"));
//console.log(facebookProfile.friends);
//console.log(facebookProfile.messages);