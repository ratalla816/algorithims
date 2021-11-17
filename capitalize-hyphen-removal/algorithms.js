

// Given a string comprised of two words separated by a hyphen, capitalize the first entire word, 
// replace the hyphen with a space, and capitalize the first letter of the second word

// ex input: “some-thing”
// ex output: “SOME Thing”

// Questions:
// will there always be just two words?
// Will there always be a hyphen?
// Will there ever be any other special char? how are they dealt with? 
// Are there any other spaces anywhere?

// #1 split the words at the hyphen (and remove hyphen)
// #2 capitalize all letters in the first word
// #3 capitalize the first letter in the 2nd word
// #4 rejoin the words separated with a space

const string = 'my-name'

function newWords() {
    var words = string.split('-');
    console.log(words);
     let [a,b] = words // array destructuring
    //  console.log(a);
    //  console.log(b);
    
         a = a.toUpperCase();
         b = b[0].toUpperCase() + b.slice(1);
       
         return a.concat(' ', b) 


        // return words[1].charAt(0).toUpperCase() + words[1].slice(1); RETURNS "my name"
        // return words[1].toUpperCase() + words[1].slice(1);
        // words[1].toUpperCase() + words[1].slice(1);
        // words[1].toUpperCase() + slice(1);
        // return charAt(0).toUpperCase() + words[1].slice(1); (this doesn't run, so we know that return words[?] is needed)
        // return word[1].charAt(1).toUpperCase() + word[1].slice(1);

    //    }); 
        // return words.join(' ');
}

 newWords();
 console.log(newWords());

//  /(-|^)([^-]?)


let array = ['cat', 'dog', 'fish', 'mouse'];

let [a, ...b] = array;