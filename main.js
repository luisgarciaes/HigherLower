import * as animeList from "./animeList.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    let leftAnime;
    animeList.assignAnime().then((data) => {
      leftAnime = data;
   
    let p = document.getElementById("left_popularity");
    p.innerHTML = leftAnime._popularityRanking;
    console.log(leftAnime._popularityRanking);
    });
    let rightAnime = animeList.assignAnime();
    animeList.assignAnime().then((data) => {
      rightAnime = data;
      console.log(rightAnime);
    });
    
    let r;
  } catch (e) {
    console.log("Error: ");
    console.log(e);
  }
});
