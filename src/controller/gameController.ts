import Card from "../model/card";
import pokeService from "../service/poke.service";
import { createListNull } from "../utils/utils";

class GameController {
  list: any[] = [];
  total: number = 20;
  width: number = 8;
  height: number = 6;
  cardSelect: Card[] = [];

  constructor() {}

  createList() {
    (async () => {
      this.list = createListNull(this.width, this.height);

      let listPoke: Card[] = [];

      for (var i = 1; i < this.total + 1; i++) {
        const poke = await pokeService.getById(i + 1);

        const newCard1 = new Card(`${poke.pokeId}`, poke.image);
        const newCard2 = new Card(`${poke.pokeId}`, poke.image);
        listPoke.push(newCard1);
        listPoke.push(newCard2);
      }

      for (let i = 0; i < listPoke.length; i++) {
        let x: number = Math.trunc(Math.random() * (this.width - 1) + 1);
        let y: number = Math.trunc(Math.random() * (this.height - 1) + 1);

        listPoke[i].setPosion({ x, y });

        this.list[y][x].push(listPoke[i]);
      }

      this.render();
    })();
  }

  render() {
    if (!this.checkList()) {
      this.reCreate();
    }
    let str = ``;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const element = this.list[i][j];
        element.forEach((e: Card, index: number) => {
          str += e.render(index);
        });
      }
    }
    document.getElementById("container").innerHTML = str;
    this.addEvent();
  }

  addEvent() {
    document.querySelectorAll(".card").forEach((e: HTMLElement) => {
      e.addEventListener("click", (event: any) => {
        const id = event.target.getAttribute("data-id");
        const current = this.getCardByID(id);

        if (!current) return;

        current.click();

        this.cardSelect.push(current);

        if (this.cardSelect.length == 2) {
          if (this.cardSelect[0].id == this.cardSelect[1].id) {
            this.cardSelect[0].removeSelect();
            this.cardSelect = [];
          } else if (this.cardSelect[0].check(this.cardSelect[1])) {
            this.cardSelect.forEach((e: Card) => {
              e.clickCorrect();
              this.removeByID(e.id);
            });
            this.cardSelect = [];

            if (!this.checkList()) {
              this.reCreate();
            }
          } else {
            this.cardSelect.forEach((e: Card) => e.clickError());
            this.cardSelect = [];
          }
        }
      });
    });
  }

  getCardByID(id: any): null | Card {
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      for (let j = 0; j < element.length; j++) {
        const el: any[] = element[j];
        if (el.length == 0) continue;

        const cardCurrent = el.find((e) => e.id == id);
        if (cardCurrent) {
          return cardCurrent;
        }
      }
    }
    return null;
  }

  removeByID(id: any) {
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      for (let j = 0; j < element.length; j++) {
        let el: any[] = element[j];
        if (el.length == 0) continue;

        const cardIndex = el.findIndex((e) => e.id == id);

        if (cardIndex >= 0) {
          el.splice(cardIndex, 1);
        }
      }
    }
  }

  checkList() {
    let listTemp: Card[] = [];
    for (let i = 0; i < this.list.length; i++) {
      const element: any[] = this.list[i];
      for (let j = 0; j < element.length; j++) {
        const el: any[] = element[j];
        if (el.length > 0) {
          listTemp.push(el[el.length - 1]);
        }
      }
    }

    listTemp = listTemp.sort((a: Card, b: Card) => a.id - b.id);
    console.log(listTemp);

    for (let i = 0; i < listTemp.length - 1; i++) {
      if (listTemp[i].idPokemon == listTemp[i + 1].idPokemon) {
        return true;
      }
    }

    return false;
  }

  reCreate() {
    let listPoke: Card[] = this.getListPoke();
    this.list = createListNull(this.width, this.height);

    for (let i = 0; i < listPoke.length; i++) {
      let x: number = Math.trunc(Math.random() * (this.width - 1) + 1);
      let y: number = Math.trunc(Math.random() * (this.height - 1) + 1);

      listPoke[i].setPosion({ x, y });

      this.list[y][x].push(listPoke[i]);
    }

    this.render();
  }

  getListPoke() {
    const listTemp: Card[] = [];
    for (let i = 0; i < this.list.length; i++) {
      const element: any[] = this.list[i];
      for (let j = 0; j < element.length; j++) {
        const el: any[] = element[j];
        if (el.length > 0) {
          listTemp.push(...el);
        }
      }
    }
    return listTemp;
  }

  start() {
    this.createList();
  }
}

export default GameController;
