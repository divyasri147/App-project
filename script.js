const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {

  let value = search.value.toLowerCase();

  cards.forEach(card => {

    let title = card.querySelector("h3").textContent.toLowerCase();

    if(title.includes(value)){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

});
