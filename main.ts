let a: number;
let b: boolean;
let c: string;

// allow this variable to be flexible
let d: any;

// e must be an array of numbers
let e: number[] = [1, 2, 3];

// f must be an array of any types
let f: any[] = [1, true, "a", false];

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum Color {
    Red,
    Green,
    Blue,
}

// explicitly setting values. This is what is going on behind the scenes above.
enum Color2 {
    Red = 0,
    Green = 1,
    Blue = 2,
}

let backgroundColor = Color.Red;

// will log "0"
console.log(Color.Red);
