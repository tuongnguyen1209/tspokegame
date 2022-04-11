class LoadingController {
  constructor() {}

  static show() {
    document.getElementById("loading").classList.add("show");
  }
  static hidden() {
    document.getElementById("loading").classList.remove("show");
  }
}

export default LoadingController;
