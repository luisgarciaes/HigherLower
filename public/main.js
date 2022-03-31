import * as animeList from "./animeList.js";
//import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need

//import { getAnalytics } from "firebase/analytics";


// // Your web app's Firebase configuration

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {

//   apiKey: "AIzaSyAZSAP89rnXUUFnpfMmeOtMj07o0hAFmaM",

//   authDomain: "higher-lower-anime.firebaseapp.com",

//   projectId: "higher-lower-anime",

//   storageBucket: "higher-lower-anime.appspot.com",

//   messagingSenderId: "795580983909",

//   appId: "1:795580983909:web:c9bb283fbe6a7eda08748c",

//   measurementId: "G-GFGKVEX400"

// };
// // Initialize Firebase

// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

let leftPopularity = document.getElementById("left-popularity");
let leftTitle = document.getElementById("left-title");
let leftImageUrl = document.getElementById("left-imageurl");
let leftEngTitle = document.getElementById("left-engtitle");
let rightImageUrl = document.getElementById("right-imageurl");
let rightEngTitle = document.getElementById("right-engtitle");
let rightTitle = document.getElementById("right-title");
let rightPopularity = document.getElementById("right-popularity");
let higherButton = document.getElementById("higher-button");
let lowerButton = document.getElementById("lower-button");
let correctText = document.getElementById("correct")
let wrongText = document.getElementById("wrong")
let leftAnime;
let rightAnime;
let decision;

const revealAnime = () => {
  rightPopularity.style.display = "initial";
  higherButton.style.display = "none";
  lowerButton.style.display = "none";
};
const decideWin = () => {
  if (
    rightAnime._popularityRanking > leftAnime._popularityRanking &&
    decision == true
  ) {
    console.log("WRONG!");
    wrongText.style.display = initial;
  } else if (
    rightAnime._popularityRanking < leftAnime._popularityRanking &&
    decision == false
  ) {
    console.log("WRONG!");
    wrongText.style.display = "initial";
  } else {
    console.log("RIGHT!");
    correctText.style.display = "initial";
  }
};
lowerButton.addEventListener("click", function () {
  decision = false;
  decideWin();
  revealAnime();
});
higherButton.addEventListener("click", function () {
  decision = true;
  decideWin();
  revealAnime();
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    animeList.assignAnime().then((data) => {
      leftAnime = data;

      leftPopularity.innerHTML = "#" + leftAnime._popularityRanking;
      console.log(leftAnime._popularityRanking);

      leftTitle.innerHTML = leftAnime._name;
      console.log(leftAnime._title);

      leftImageUrl.src = leftAnime._pictureUrl;
      console.log(leftAnime._pictureUrl);

      //if(e=null){e.innerHTML =" "}
      leftEngTitle.innerHTML = "(" + leftAnime._englishName + ")";
      console.log(leftAnime._englishName);
    });

    animeList.assignAnime().then((data) => {
      rightAnime = data;

      rightPopularity.innerHTML = "#" + rightAnime._popularityRanking;
      console.log(rightAnime._popularityRanking);

      rightTitle.innerHTML = rightAnime._name;
      console.log(rightAnime._title);

      rightImageUrl.src = rightAnime._pictureUrl;
      console.log(rightAnime._pictureUrl);

      //if(e=null){e.innerHTML =" "}
      rightEngTitle.innerHTML = "(" + rightAnime._englishName + ")";
      console.log(rightAnime._englishName);
    });
  } catch (e) {
    console.log("Error: ");
    console.log(e);
  }
});
