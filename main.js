import * as animeList from './animeList.js'
let leftAnime;
let rightAnime;
document.addEventListener('DOMContentLoaded', async()=>{   
  try {
    animeList.assignAnime().then((result) => {
    leftAnime = result;
    console.log(leftAnime)
    });
    animeList.assignAnime().then((result) => {
    rightAnime = result;
    console.log(rightAnime)
    });

  } catch (e) {
    console.log("Error: ")
    console.log(e)
  }
})


