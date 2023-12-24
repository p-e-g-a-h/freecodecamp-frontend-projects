
const info = [
  {
    btnId: 'Heater 1',
    btnText: 'Q',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    btnId: 'Heater 2',
    btnText: 'W',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    btnId: 'Heater 3',
    btnText: 'E',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    btnId: 'Heater 4',
    btnText: 'A',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    btnId: 'Clap',
    btnText: 'S',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    btnId: 'Open-HH',
    btnText: 'D',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    btnId: 'kickNHat',
    btnText: 'Z',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    btnId: 'Kick',
    btnText: 'X',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    btnId: 'Closed-HH',
    btnText: 'C',
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const handleClick = (text, audio) => {
  $('#display').text(text);
  $('#' + audio)[0].play();
}

const button = (btnId, btnText, audioSrc) => {
  let btn = `
    <div class="col">
      <button id=${btnId} onClick="handleClick('${btnId}', '${btnText}')" class="col-12 drum-pad btn btn-dark text-light">
        <span>${btnText}</span>
        <audio id=${btnText} class="clip" src=${audioSrc} type="audio/mpeg"></audio>
      </button>
    </div>
  `;
  return btn;
}

const generateButtons = info.reduce((result, item) => {
  return result.concat(button(item.btnId, item.btnText, item.audioSrc));
}, "");

const handleKeydown = (event) => {
  const key = event.key.toUpperCase();
  const result = info.some(item => item.btnText == key);
  if(result) {
    $('#' + key).click();
  }
}

$(document).ready(() => {
  const container = $('#container');
  container.append(generateButtons);
  $(document).on('keydown', handleKeydown)
});