//Iteration 1

const hacker1 = "Jimmy";
const hacker2 = "Nicholas"

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

//Iteration 2

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length === hacker2Length){
  console.log(`Wow you both have equally long names, ${hacker1Length} characters`);
}

else if (hacker1Length > hacker2Length){
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
}

else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
}

// Iteration 3

let newString = "";

for (let i = 0; i < hacker1.length; i++){
  newString += hacker1[i] + " ";
}

console.log(newString.toUpperCase());



      let reversedString = "";
     for (let i = hacker2.length -1; i >= 0; i--){
       reversedString += hacker2[i];
  
     }

   console.log(reversedString);

  if (hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name");
  }

 else if (hacker1.localeCompare(hacker2) < 0){
    console.log("The drivers name goes first");
  }
  else {
    console.log("Yo the navigator goes first definitely");
  }


// Bonus 1 

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nisl lorem. Quisque pellentesque faucibus elit, tempus dictum massa ultrices quis. Pellentesque dapibus, ligula volutpat imperdiet porttitor, leo felis placerat justo, at ullamcorper libero erat id neque. Nunc malesuada malesuada elit fermentum lobortis. In aliquet porttitor tristique. Quisque eget ultrices quam. Ut quis iaculis leo. Quisque pharetra nisi eget tincidunt placerat. Suspendisse a metus tempus, tincidunt velit vitae, iaculis mauris. In hac habitasse platea dictumst. Sed id pharetra lectus, eu gravida nisi. In ac libero nec quam ornare interdum eget sit amet sem. Fusce sed quam tortor. In vitae dolor id nunc finibus lobortis.Sed sit amet viverra tellus. Nunc egestas eu ex at rutrum. Phasellus auctor enim quis magna efficitur accumsan. Vivamus volutpat nisi non turpis pretium, eu placerat nunc feugiat. Etiam tincidunt in dolor vitae sollicitudin. Nam massa est, aliquet sed malesuada et, mattis non metus. Fusce et lectus felis. Suspendisse scelerisque mattis erat, non maximus ex accumsan dapibus. Donec aliquet diam ut dignissim interdum. Nullam scelerisque tellus a odio fermentum, a venenatis risus tristique. Sed et imperdiet diam. Nulla sapien lacus, blandit eget interdum a, tristique eget nisi. Etiam quis arcu sed nibh molestie luctus non sed sapien. Phasellus pretium dolor et fringilla ultricies. Donec arcu libero, auctor ut accumsan in, vulputate ut urna.Vivamus ut mauris sapien. Aenean vitae accumsan est, a eleifend tellus. Donec eget pretium ante. Vivamus dignissim, ex vel sollicitudin dignissim, magna velit pulvinar nunc, in ultrices massa lectus vel nunc. Donec purus nibh, porta sit amet felis ut, accumsan accumsan mi. Pellentesque eu sem elit. Nulla fermentum hendrerit lorem, vitae lobortis risus auctor sit amet. Praesent maximus arcu non nunc ullamcorper lacinia. Quisque vel suscipit urna. Vivamus faucibus magna vitae sodales imperdiet. Nullam tempor mauris leo, vel pharetra sapien hendrerit eget. In facilisis molestie tincidunt. Integer sit amet mauris lorem. Fusce at neque id nunc consectetur pellentesque quis ut felis. Suspendisse in est vestibulum tortor commodo bibendum quis non nibh. Fusce eu semper ex."


console.log(longText.split(' ').length);


// Palindromes

const phraseToCheck = "kayak"

let phrase1 = "";

for (let i = 0; i < phraseToCheck.length; i++){
  phrase1 += phraseToCheck[i];
}


let phrase2 = "";
for (let i = phraseToCheck.length -1; i >=0; i--){
  phrase2 += phraseToCheck[i]
}

if (phrase1 == phrase2) {
  console.log("It is a Palindrome");
} else (console.log("It is not a Palindrome"));




phrase2ToCheck = "a man, a plan, a canal, panama"

let newphrase1 = "";

for (let i = 0; i < phrase2ToCheck.length; i++){
    if (phrase2ToCheck[i] == " " || phrase2ToCheck[i] == ","){
        continue 
    }
  newphrase1 += phrase2ToCheck[i];
}


let newphrase2 = "";

for (let i = phrase2ToCheck.length - 1; i >= 0; i--){
   if (phrase2ToCheck[i] == " " || phrase2ToCheck[i] == ","){
    continue
   }
   newphrase2 += phrase2ToCheck[i];
}


if (newphrase1 == newphrase2){
  console.log("It is a palindrome");
}