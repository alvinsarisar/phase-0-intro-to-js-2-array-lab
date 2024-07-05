// Write your solution here!
// Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function to destructively prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function to destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat to the array non-destructively
function appendCat(name) {
    return [...cats, name];
}

// Function to prepend a cat to the array non-destructively
function prependCat(name) {
    return [name, ...cats];
}

// Function to remove the last cat from the array non-destructively
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat from the array non-destructively
function removeFirstCat() {
    return cats.slice(1);
}
