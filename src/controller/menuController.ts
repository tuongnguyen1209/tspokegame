class MenuController {
  constructor() {}

  renderMenu() {}
  renderResetMenu() {
    document.body.innerHTML += `
      <div class="control control__bottom">
        <button id="btn-reset" class="btn btn__reset">RESET</button>
        </div>
      `;
  }

  win() {
    const container = document.getElementById("container");
    container.innerHTML = `    
    <div class="control">
        <div class="header header__end">CONGRATULATION</div>
        <button id="btnnewgame" class="btn btn__start">NEW GAME</button>
    </div>
    `;
  }
  lost() {}
}

export default MenuController;
