const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const uniUrl = `${url}${appId}/likes/`;

const fetchlikes = async () => {
  let liking = [];
  await fetch(uniUrl)
    .then((response) => response.json())
    .then((res) => {
      liking = res;
    });
  return liking;

};

export default fetchlikes;
