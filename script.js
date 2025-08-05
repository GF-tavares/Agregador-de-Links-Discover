function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}
  //
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // se tiver lightmode, adicionar a imagem light
  img.setAttribute("src", './assets/IMG_0560.jpeg')
  
   if (html.classList.contains("light")) {
     // se não, adicionar a imagem normal
     img.setAttribute("src", './assets/ChatGPT Image 3 de ago. de 2025, 17_16_51.png')
    
  } else {
    
  }



  // substituir a imagem
}
