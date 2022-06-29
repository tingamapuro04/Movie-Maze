import fetchFromApi from "./fromApi";

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const uniUrl = `${url}${appId}/likes/`;

const postLike = async (itemId) => {
  const res = await fetch(uniUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
  const data = res.text();
  console.log(data);
};

const likeIt = async () => {
  const allMovies = await fetchFromApi()
  const likes = document.querySelectorAll('.likes')
  const likeCount = document.querySelectorAll('.likeCount')
  likes.forEach((element, index) => {
    let inner = JSON.parse(likeCount[index].innerHTML)

    element.addEventListener('click', () => {
      postLike(allMovies[index].name)
      inner += 1
      likeCount[index].innerHTML = inner
    })
  })
}
