class AudioController {
  backgroundAudio: any;
  effectAudio: any;
  constructor() {
    this.backgroundAudio = new Audio();
    this.effectAudio = new Audio();
  }
  audioCorrect() {
    this.effectAudio.src =
      "https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3";
    this.effectAudio.play();
  }
  audioClick() {
    this.effectAudio.src =
      "https://cdn.pixabay.com/download/audio/2022/01/07/audio_5aa22f146f.mp3?filename=rclick-13693.mp3";
    this.effectAudio.play();
  }
  audioError() {
    this.effectAudio.src =
      "https://cdn.pixabay.com/download/audio/2021/08/04/audio_a5fa3caf34.mp3?filename=good-6081.mp3";
    this.effectAudio.play();
  }
  audioWin() {
    this.effectAudio.src =
      "https://cdn.pixabay.com/download/audio/2021/08/04/audio_bf3620f48d.mp3?filename=yay-6120.mp3";

    this.effectAudio.play();
  }
  audioBackground() {
    this.backgroundAudio.src =
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1c91345595.mp3?filename=russian-land-loop-88761.mp3";
    this.backgroundAudio.loop = true;
    this.backgroundAudio.play().loop();
  }
}

export default AudioController;
