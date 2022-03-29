import * as animeList from "./animeList.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    let leftAnime;
    animeList.assignAnime().then((data) => {
      leftAnime = data;
   
    let p = document.getElementById("left_popularity");
    p.innerHTML = "Popularity Ranking #" + leftAnime._popularityRanking;
    console.log(leftAnime._popularityRanking);

    let t = document.getElementById("left_title");
    t.innerHTML = leftAnime._name;
    console.log(leftAnime._title);

    let i = document.getElementById("left_imageurl");
    i.src = leftAnime._pictureUrl;
    console.log(leftAnime._pictureUrl);

    let e = document.getElementById("left_engtitle");
    //if(e=null){e.innerHTML =" "}
    e.innerHTML = "("+leftAnime._englishName+")";
    console.log(leftAnime._englishName);


    });
    let rightAnime;
    animeList.assignAnime().then((data) => {
      rightAnime = data;
      
      // let p = document.getElementById("right_popularity");
      // p.innerHTML = "#" + rightAnime._popularityRanking;
      // console.log(rightAnime._popularityRanking);
  
      let t = document.getElementById("right_title");
      t.innerHTML = rightAnime._name;
      console.log(rightAnime._title);
  
      let i = document.getElementById("right_imageurl");
      i.src = rightAnime._pictureUrl;
      console.log(rightAnime._pictureUrl);

      let e = document.getElementById("right_engtitle");
      //if(e=null){e.innerHTML =" "}
      e.innerHTML = "("+rightAnime._englishName+")";
      console.log(rightAnime._englishName);
  
    });

  } catch (e) {
    console.log("Error: ");
    console.log(e);
  }
});
