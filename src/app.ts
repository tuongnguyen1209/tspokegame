import AudioController from "./controller/audioController";
import GameController from "./controller/gameController";
import MenuController from "./controller/menuController";

class App {
  constructor() {}

  btnCreateEvent() {
    document.getElementById("btnStart").addEventListener("click", (e) => {
      const gameController = new GameController();
      gameController.start();
      document.getElementById("btnStart").classList.add("hidden");

      const menuController = new MenuController();
      menuController.renderResetMenu();
      document.getElementById("btn-reset").addEventListener("click", () => {
        gameController.start();
      });
      const audioController = new AudioController();
      audioController.audioBackground();
    });
  }

  start() {
    this.btnCreateEvent();
  }
}

export default App;
