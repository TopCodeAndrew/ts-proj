var a;
var b;
var c;
// allow this variable to be flexible
var d;
// e must be an array of numbers
var e = [1, 2, 3];
// f must be an array of any types
var f = [1, true, "a", false];
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// explicitly setting values. This is what is going on behind the scenes above.
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
var backgroundColor = Color.Red;
// will log "0"
console.log(Color.Red);
