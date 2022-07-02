const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const uniUrl = `${url}${appId}/likes/`;

const fetchlikes1 = async () => {
  let liking = [];
  const response = await fetch(uniUrl);
  liking = response.json();
  return liking;
};

const fetchlikes = fetchlikes1();

export default fetchlikes;
