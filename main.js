let prop = prompt("Enter Your Sentence: ");
let count = 0;
function Read() {
  for (let i = 0; i < prop.length; i++) {
    console.log(prop[i]);
    count += 1;
  }
  console.log(count);
}

Read();
let counter = 1;
function ReadWords() {
  for (let i = 0; i < prop.length; i++) {
    if (prop[i] === " ") {
      console.log("break");
      counter += 1;
    } else {
      console.log(prop[i]);
    }
  }
  console.log(counter);
}

ReadWords();

let conteur = 0;

function ReadVowls() {
  for (let i = 0; i < prop.length; i++) {
    if (
      prop[i] === "o" ||
      prop[i] === "i" ||
      prop[i] === "a" ||
      prop[i] === "y"
    ) {
      conteur++;
    }
  }
  console.log(conteur);
  if (conteur === 0) {
    console.log("no vowel");
  }
}

ReadVowls();
