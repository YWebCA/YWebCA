var students = [
    "Alice"
  , "Ambrea"
  , "Annalise"
  , "Byron"
//  , "Cesar"
  , "Clayton"
  , "Dawn"
//  , "Elizabeth"
  , "Erica"
  , "Francisco"
  , "Katrina"
//  , "La'Shawna"
  , "Scott"
  , "Tiffany"
//  , "Tonia"
  , "Victoria"
  , "Yeng"
];

var elements = [
    "Line"
  , "Shape"
  , "Form"
  , "Space"
  , "Colour"
  , "Value"
  , "Texture"
];

var principles = [
    "Balance"
  , "Contrast"
  , "Emphasis"
  , "Harmony"
  , "Movement"
  , "Repetition"
  , "Proportion"
  , "Variety"
];

console.log("\nPicking...\n");
for (var i = 0; i < students.length; i++ ) {
  console.log( students[i]
             + ": "
             + elements[ Math.floor( Math.random() * elements.length ) ]
             + " and "
             + principles[ Math.floor( Math.random() * principles.length ) ]
             );
}
console.log("\nNow go design stuff!\n");
