//First Question

let arr1 = [3, 7, 34, 90, 12];
let lastElement = arr1[arr1.length - 1];
console.log(lastElement);
//
let arr2 = [true, "green", "where", 12, 56];
let last = arr2[arr2.length - 1];
console.log(last);


//2nd question
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let petsString = myPets.join(" "); 
console.log(petsString); 



//3 Sorting array items
var arr3=[-5,9,5,3,2,-3,6,8,4,1];
let sortedArray=arr3.sort((k,l)=>k-l);
console.log({sortedArray});


//4th question
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let specialArr = [];
let duplicateArr = [];
arr.forEach((item) => {
    if (!specialArr.includes(item)) {
        specialArr.push(item); 
    } else if (!duplicateArr.includes(item)) {
        duplicateArr.push(item); 
    }
});
console.log({specialArr});
console.log({duplicateArr});


//5th question
let arr5 = ["the", "way", "x", 4];
let myWord = "food";
if (arr5.includes(myWord)) {
    console.log(myWord);
} else {
    console.log("The search word was not found.");
}


//6th question
let word = "renniw";
let updatedWord = word.split('').sort().join('');
console.log(updatedWord);


// 7th question
let fruits=["Banana","Orange","Mango","Strawberry","Avocado","Apple","Grape","Lemon","Papaya","Pinnapple"];
fruits.splice(4,0, "Tomato");
console.log({fruits});

