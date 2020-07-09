(function () {
  document.getElementById("filtro").addEventListener("change", function (e) {
    let option = e.currentTarget.value;

    filterCards(option);
  });

  /**
   * Filtra os cards de acordo com a seleção esolhida.
   *
   * @param {string} option opção a ser filtrada.
   */
  function filterCards(option) {
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].getAttribute("data-option").indexOf(option) >= 0) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
})();
