var chooseAndPluck = function(array) {
  var index = Math.floor( Math.random() * array.length );
  var pluck = array[index];
  array = array.splice(index, 1);
  return pluck;
}

var students = [
    "this"
  , "that"
  , "the other thing"
  , "that other one thing"
  , "Alice"
  , "Bob"
  , "Misc."
  , "Parity"
];

console.log("\nPairing...\n");
while ( students.length > 1 )
  console.log( "Pair: "
             + chooseAndPluck(students)
             + " and "
             + chooseAndPluck(students) );
if ( students.length > 0 ) console.log( "Remainder: " + students[0] );
console.log("\nNow go do stuff!\n");
