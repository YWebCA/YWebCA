$(document).ready(function() {
  var count = 0;
  function cansee(t) {$(t).css('display', 'block')};
  function notsee(n) {$(n).css('display', 'none')};
  $("#blocktoo").click(function(event) {
    var playin = prompt("Did you ask your pawents?");
    if(playin == "yes") {
      alert("Good! Lets play then.");
      $(".talkin").append("<p> The young baby player recieved permission from their parents, and therefore was allowed to play this wonderful game. They find themselves at a party they were invited to by their good friend Person Personson.</p>");
      cansee("#blockthree");
    }
    else if (playin == "no") {
      alert("Fine. Just dont stay up too late.");
      $(".talkin").append("<p>And thus the rebelious baby avidly continued to play this game despite not asking their parental figures. They find themselves in a par-tay that they're not supposed to be at. </p>");
      cansee("#blockthree");
    }
    else if (playin == null){
      alert("Cancel? who do you think you're cancelling on? You wanna fight or somethin? Fine. But I dont like you.")
    }
    else if (playin != ""){
      alert("Its either yes you asked you parents, or you didnt because it's your bedtime.")
    }
    else {
      alert("Well write SOMETHING down.")
    }
  });
$("#blockthree").click(function(event) {
  var playin = prompt("Oh dang, did you see that?");
  if(playin == "yes") {
    alert("Lets look closer!");
    $(".talkin").append("<p> The player was so intuitive that he noticed someone fall from the balcony to their untimely hydration. They fell into a pool.</p>");
    cansee("#blockfor")
  }
  else if (playin == "no") {
    alert("Yeah you're right. Lets not meddle.");
    $(".talkin").append('<p> The player decided that they were too coo for school, nd didnt stick their nose where it didnt belong.</p>');
    notsee("#blockthree")
    cansee("#blocksev");
  }
  else if (playin == null){
    alert("Cancel? But the party just started!! Click continue when you want to do something with your life.");
    $(".talkin").append("<p>The player was partying too hard. They didnt hear a thing.</p>")
  }
  else if (playin != ""){
    alert("Ahahaha are you a little tipsy there bud? It's a yes or no question. Try again.")
  }
  else {
    alert("Well write SOMETHING down.")
  }
});
$("#blockfor").click(function(event) {
  var playin = prompt("Well good thing nothing bad hapenned. Do you want to go help him out?");
  if(playin == "yes") {
    alert("You're too nice. But good job.");
    $(".talkin").append("<p> You go to see how you can help the guy out, but he's gone!</p>");
    notsee("#blockfor")
    cansee("#blockfive")
  }
  else if (playin == "no") {
    alert("Well too bad. I'm making you.");
    $(".talkin").append('<p> The heartless player reluctantly proceded to see how the poor guy was doing.</p>');
    cansee("#blockfive")
  }
  else if (playin == null){
    alert("Cancel? But the party just started!! Click continue when you want to do something with your life.");
    $(".talkin").append("<p>The player was partying too hard. They didnt care about the guy for now. Maybe in a couple seconds.</p>")
  }
  else if (playin != ""){
    alert("Ahahaha are you a little tipsy there bud? It's a yes or no question. Try again.")
  }
  else {
    alert("Well write SOMETHING down.")
  }
});
$("#blockfive").click(function(event) {
  var playin = prompt("Man this is getting crazy!!! wanna keep going?");
  if(playin == "yes") {
    alert("ok. Lets do it!");
    $(".talkin").append("<p> You jump into the pool and find yourself inside a crazy space box with a window. And through the window you can see space. Space box.</p>");
    notsee("#blockfive")
    cansee("#blocksix")
  }
  else if (playin == "no") {
    alert("Yeah you're right. Lets not meddle.");
    $(".talkin").append("<p> You remember that a couple years ago the guy who fell in said something about your hair looking average that day. So we dont care much for them. BUT SOMEONE PUSHES YOU IN!!! Before you can think about the mean words you'll say to the pusher, you find yourself inside a box in space. </p>");
    cansee("#blocksix");
  }
  else if (playin == null){
    alert("Cancel? But the party just started!! Click continue when you want to do something with your life.");
    $(".talkin").append("<p>The player resisted the urge to run away and cry somewhere for now and just kind of stood there.</p>")
  }
  else if (playin != ""){
    alert("I know its crazy and all but keep calm and type yes or no.")
  }
  else {
    alert("Well write SOMETHING down.")
  }
});
$("#blocksev").click(function(event) {
  var playin = prompt("I smell wings!! Wanna go down to check it out?");
  if(playin == "yes") {
    alert("Good!.");
    $(".talkin").append("<p> You go down for wings, and someone tell you that a guy fell into the pool. You feel bad because maybe he just wanted wings. Lets go check him out. You heard that the guy just fell in the pool. Nothing fancy.</p>");
    notsee("#blocksev")
    cansee("#blockfor")
  }
  else if (playin == "no") {
    alert("Well too bad. I'm making you.");
    $(".talkin").append('<p> The player reluctantly proceded to struggle down the stairs to go get some wings, but overheard someone talking about the guy that fell and figured if he was going to be forced to eat wings, he would bring someone along. You heard that the guy just fell in the pool. Nothing fancy.</p>');
    notsee("#blocksev")
    cansee("#blockfor")
  }
  else if (playin == null){
    alert("Cancel? But the party just started!! Click continue when you want to do something with your life.");
    $(".talkin").append("<p>The player was partying too hard. But his tummy grumbled ever louder.</p>")
  }
  else if (playin != ""){
    alert("Ahahaha are you a little tipsy there bud? It's a yes or no question. Try again.")
  }
  else {
    alert("Well write SOMETHING down.")
  }
});
$("#block").click(function(event) {
  notsee("#block");
  count = count + 1;
  console.log(count);
  var promp = prompt("Are you sure?");
  if (promp === null) {
    alert("Obviously not. Whimp");
    cansee("#block")
  }
  else if (promp == "no") {
    alert("Oh. I see. Well. Maybe later huh.");
    cansee("#block");
  }
  else if (promp == "yes") {
    alert("AWESOMELETSPLAY");
    var start = +prompt("how old are you?");
    console.log(start)
    if (start >= 21) {
      alert("Sweet. Lets get crunk!");
      $(".talkin").append("<p> It was a dark and stormy night. The player was getting crunk and par-taying as usual. </p>");
      cansee("#blockthree");
    }
    else if (start < 21 & start !=0 ) {
      alert("Alright, But you need your parents permission. Baby.");
      $(".talkin").append('<p> It was a dark and stormy night. The player was such a youngin, that they had to get permission from their wittle pawents before continuing.</p>');
      cansee("#blocktoo")
    }
    else if (start == 0) {
      alert("you should write something down. Like maybe how old you are.")
    }
    else {
      alert("Your age. In numbers?");
      cansee("#block")
    }
  }
  else {
    alert("Whats that? It's yes or no.")
    cansee("#block");
  }

});
function antiGrav(ele) { // anti-gravity floating on an element ;)
  var distance = 8;
  $(ele).animate({
    'top': "+="+distance+"px"
  },1500,"swing",function(){
    $(ele).animate({
      'top': "-="+distance+"px"
    },1300,"swing",function(){
      antiGrav(ele);
    });
  });
}
});


