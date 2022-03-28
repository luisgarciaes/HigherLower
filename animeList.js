
const apiData = {
  url: "https://api.jikan.moe/v4/",
  animeById: "anime/1",
  randomAnime: "random/anime",
  topAnime: "top/anime&bypopularity",
};
const { url, animeById, randomAnime, topAnime } = apiData;
const apiUrl = `${url}${randomAnime}`;

const getRandomAnime = async () => {
  const response = await fetch(apiUrl);
  console.log("Response: " + response.status);
  return await response.json();
};

// export const assignAnime = async () => {
//    await getRandomAnime().then((data) => {
//     leftAnimeJSON = data;
//     console.log(leftAnimeJSON);
//   });
//   await getRandomAnime().then((data) => {
//     rightAnimeJSON = data;
//     console.log(rightAnimeJSON.data);
//   });
// };

export class Anime {
  constructor(name,pictureUrl,popularityRanking,url){
    this._name = name;
    this._pictureUrl = pictureUrl;
    this._popularityRanking = popularityRanking;
    this._url= url;
  }
}

export const assignAnime = async () => {
  let a;
  await getRandomAnime().then((data) => {
   let object = data;
   a = new Anime(object.data.title, object.data.images.webp.large_image_url, object.data.popularity, object.data.url)
 });
 return a;
};


