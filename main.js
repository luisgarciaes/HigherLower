import * as animeList from "./animeList.js";
let leftPopularity = document.getElementById("left-popularity");
let leftTitle = document.getElementById("left-title");
let leftImageUrl = document.getElementById("left-imageurl");
let leftEngTitle = document.getElementById("left-engtitle");
let rightImageUrl = document.getElementById("right-imageurl");
let rightEngTitle = document.getElementById("right-engtitle");
let rightTitle = document.getElementById("right-title");
let rightPopularity = document.getElementById("right-popularity");
console.log(document.getElementById("higher-button"))
let higherButton = document.getElementById("higher-button");
let lowerButton = document.getElementById("lower-button");

const showText = () => {
  rightPopularity.style.display="initial";
  higherButton.style.display="none";
  lowerButton.style.display="none";
};

higherButton.addEventListener("click", showText);

document.addEventListener("DOMContentLoaded", async () => {
  try {
    
    let leftAnime;
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
    let rightAnime;
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
