let convertBtn = document.getElementById("convert-btn")

let camelCaseValue = document.getElementById("camel-case")

let pascalCaseValue = document.getElementById("pascal-case")

let snakeCaseValue = document.getElementById("snake-case")

let screamingSnakeCase = document.getElementById("screaming-snake-case")

let kebabCase = document.getElementById("kebab-case")

let screamingkebabCase = document.getElementById("screaming-kebab-case")

convertBtn.addEventListener("click", convert);


function convert() {
    let input = document.getElementById("text");
    let inputValue = input.value

    setTimeout(() => {
        xyz = toCamelCase(inputValue)

        camelCaseValue.innerText = xyz
    }, 1000);


    setTimeout(() => {
        let pascalcase = toPascalCase(inputValue)

        pascalCaseValue.innerText = pascalcase
    }, 2000);

    setTimeout(() => {
        let snakecase = toSankeCase(inputValue)

        snakeCaseValue.innerText = snakecase
    }, 3000);

    setTimeout(() => {

        let screminngcase = screemingSnakeCase(inputValue)

        screamingSnakeCase.innerText = screminngcase
    }, 4000);


    setTimeout(() => {

        let kebabCasekeValue = toKebabCase(inputValue);
        kebabCase.innerText = kebabCasekeValue


    }, 5000);

    
    setTimeout(() => {

        let scremkebabCasekeValue = screemingKebabCase(inputValue);
        screamingkebabCase.innerText = scremkebabCasekeValue
        screamingSnakeCase.innerText = screminngcase
    }, 6000);





}
// To camel case 
 
function toCamelCase(str) {

    console.log("sr", str)

   return str.replace(/ (|^\s)[a-z]/g, char=>char.toUpperCase())
    

}


// To Pascals case 
function toPascalCase(inputValue) {
    let words = inputValue.split(' ');
    console.log(words)
    for (let char of words) {
        words[words.indexOf(char)] = char.charAt(0).toUpperCase() + char.slice(1);
        console.log(char.charAt(0).toUpperCase() + char.slice(1))

    }

    console.log(words.join(" "))
    return words.join(" ")

}

// To snake case 

function toSankeCase(inputValue) {
    let words = inputValue.split(' ');
    console.log(words)


    console.log(words.join(" "))
    return words.join("_")

}

// To screeming Snake  case 

function screemingSnakeCase(inputValue) {
    let words = inputValue.split(' ');
    console.log(words)
    for (let char of words) {
        words[words.indexOf(char)] = char.toUpperCase()

    }

    console.log(words.join(" "))
    return words.join("_")

}

// To toKebab Case


function toKebabCase(inputValue) {
    let words = inputValue.split(' ');
    console.log(words)


    console.log(words.join(" "))
    return words.join("-")

}

// To screeming Kebab Case


function screemingKebabCase(inputValue) {
    let words = inputValue.split(' ');
    console.log(words)
    for (let char of words) {
        words[words.indexOf(char)] = char.toUpperCase()

    }

    console.log(words.join(" "))
    return words.join("-")

}










