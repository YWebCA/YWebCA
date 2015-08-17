var max = 10;

var pre = ["!","","","","","","","","",""];

var math = [
    "+"
  , "-"
  , "*"
  , "%"
];

var compare = [
    "=="
  , "!="
  , "<"
  , ">"
  , "<="
  , ">="
];

var logic = [
    "=="
  , "!="
  , "&&"
  , "&&"
  , "||"
  , "||"
];

var tf = function () {
  if ( Math.floor(Math.random() * 2 ) == 0 ) {
    return true;
  } else {
    return false;
  }
};

var generateMath = function () {
  var a = Math.floor(Math.random() * max*2) - max/2;
  var b = math[Math.floor(Math.random() * math.length)];
  var c = Math.floor(Math.random() * max*2) - max/2;
  return "( " + a + " " + b + " " + c + " )";
};

var generateLeaf = function () {
  if ( tf() ) {
    return Math.floor(Math.random() * max*2) - max/2;
  } else {
    return generateMath();
  }
};

var generateCompare = function () {
  var not = pre[Math.floor(Math.random() * pre.length)];
  if ( tf() ) {
    var op = compare[Math.floor(Math.random() * compare.length)];
    return not + "( " + generateLeaf() + " " + op + " " + generateLeaf() + " )";
  } else {
    return not + tf();
  }
};

var generateLogic = function () {
  var choice = [
      generateCompare
    , generateCompare
    , generateCompare
    , generateLogic
  ];
  var output = pre[Math.floor(Math.random() * pre.length)] + "( " + choice[Math.floor(Math.random() * choice.length)]();
  var terms = Math.floor(Math.random() * 4);
  for (var i = 0; i < terms; i++) {
    output += " " + logic[Math.floor(Math.random() * logic.length)] + " " + choice[Math.floor(Math.random() * choice.length)]();
  }
  return output + " )";
};

console.log(generateLogic());
