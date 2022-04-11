import position from "../interface/position";

class Card {
  static num: number = 1;
  id: number;
  idPokemon: string;
  img: string;
  selected: boolean;
  posison: position;

  constructor(idPokemon: string, img: string) {
    this.id = Card.num++;
    this.idPokemon = idPokemon;
    this.img = img;
    this.selected = false;
  }

  setPosion(posison: position) {
    this.posison = posison;
  }

  render(zIndex: number = 1) {
    return `
      <div data-id="${this.id}" class="card ${
      this.selected ? "selected" : ""
    }" style="top: ${this.posison.y}00px; left: ${
      this.posison.x
    }00px; z-index: ${zIndex} ;"   >
        <img
        data-id="${this.id}" 
            src="${this.img}"
            alt=""
            class="card__img"
        />
        </div>
      `;
  }

  click() {
    this.selected = !this.selected;
    const currentCard = this.getCardCurrent();
    if (this.selected) {
      currentCard.classList.add("selected");
    } else {
      currentCard.classList.remove("selected");
    }
  }

  removeSelect() {
    const currentCard = this.getCardCurrent();
    this.selected = false;
    currentCard.classList.remove("selected");
  }

  clickError() {
    const currentCard = this.getCardCurrent();
    currentCard.classList.add("error");
    setTimeout(() => {
      this.selected = false;
      currentCard.classList.remove("error");
      currentCard.classList.remove("selected");
    }, 300);
  }

  clickCorrect() {
    const currentCard = this.getCardCurrent();
    currentCard.classList.add("correct");
    setTimeout(() => {
      this.remove();
    }, 300);
  }

  getCardCurrent() {
    return document.querySelector(`.card[data-id='${this.id}']`);
  }

  setSelected(selected: boolean = false) {
    this.selected = selected;
  }

  remove() {
    document.querySelector(`.card[data-id='${this.id}']`).remove();
  }

  check(card: Card) {
    return this.idPokemon == card.idPokemon;
  }
}

export default Card;
