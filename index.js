document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  // 1 Find out which button they pressed
  // 2 Get data for that movie
  // 3 Replace the template values with the real ones
  
  const titanicButton = document.getElementbyId('Titantic')
  const terminatorButton = document.getElementbyId('Terminator 2')
  
  function onTitanic() {
    let data = movies.Titantic
  }
  
  titanticButton.addEventListener('click', onTitanic)
  terminatorButton.addEventListener('click', () => console.log('yo'))
});
