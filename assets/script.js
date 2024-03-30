const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "slide2.jpg",
	  tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  
  const bannerImg = document.getElementById("banner-img"); // Cibler l'image
  const bannerText = document.querySelector("#banner p"); // Cibler le texte
  const leftArrow = document.querySelector("#leftArrow");
  const rightArrow = document.querySelector("#rightArrow");
  const dots = document.querySelectorAll (".dot");
  let index = 0;
  
  leftArrow.addEventListener("click", () => {
	dots[index].classList.remove("dot_selected");
	index--;
  
	if (index < 0) {
	  index = slides.length - 1; // Dernière Image
	}
  
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;
	dots[index].classList.add("dot_selected");
	
  });
  
  rightArrow.addEventListener("click", () => {
	dots[index].classList.remove("dot_selected");
	console.log("Index actuel", index);
	index++;
	console.log("Index modifié", index);
	if (index > slides.length - 1) {
	  index = 0; // Tant que le slide n'est pas dépasse.
	  console.log("Index modifié si plus que longueur tableau", index);
	}
	console.log("Index final", index);
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;
	dots[index].classList.add("dot_selected");
  });


  


