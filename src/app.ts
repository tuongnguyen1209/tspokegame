import GameController from "./controller/gameController";

class App {
  constructor() {}

  btnCreateEvent() {
    document.getElementById("btnStart").addEventListener("click", () => {
      const gameController = new GameController();
      gameController.start();
    });
  }

  start() {
    this.btnCreateEvent();
    console.info("App start!");
  }
}

export default App;
