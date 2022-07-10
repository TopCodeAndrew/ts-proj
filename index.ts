import * as _ from "lodash";

async function name(params: number) {
    return params;
}

let lucky: number;

// lucky = "23";
lucky = 23;

type Style = "bold" | "italic";

let font: Style;

font = "bold";

interface Person {
    first: string;
    last: string;
    [key: string]: any;
}

const person: Person = {
    first: "Jon",
    last: "Doe",
};

const person2: Person = {
    first: "Jane",
    last: "Smith",
    fast: true,
    slow: true,
};

function pow(x: number, y: number): void {
    console.log(Math.pow(x, y).toString());
}

pow(23, 12);

type MyList = [number?, string?, boolean?];

const arr: MyList = [];

//Generics - used to make types inside of a class or function

// The "T" represents a variable type that we can pass in to strong type the observables internal value

class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;
