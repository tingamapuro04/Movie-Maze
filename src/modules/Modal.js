import fetchFromApi from "./fromApi";

const commentModal = async () => {
  const comment_Buttons = document.querySelectorAll('#Btn-comment') 
  const List = await fetchFromApi()
  comment_Buttons.forEach((butt) => {
    
  })
}