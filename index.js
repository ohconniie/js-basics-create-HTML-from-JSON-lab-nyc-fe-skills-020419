document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  // 1 Find out which button they pressed
  // 2 Get data for that movie
  // 3 Replace the template values with the real ones
  
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  
  function onTitanic() {
    let data = movies.Titanic
    let title = data.title // "Titantic"
    let titleDiv = document.getElementById('title')
    titleDiv.innerHTML = title
    
    let director = data.director
    let directorDiv = document.getElementById('director')
    directorDiv.innerHTML = director
    
    let genre = data.genre
    let genreDiv = document.getElementById('genre')
    genreDiv.innerHTML = genre
    
  }
  
  titanicButton.addEventListener('click', onTitanic)
  terminatorButton.addEventListener('click', () => console.log('yo'))
});
