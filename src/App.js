import './App.css';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <h1 id="displayString">Play an audio</h1>
          <div>
          <button className="drum-pad">Q<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio></button>
          <button className="drum-pad">W<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio></button>
          <button className="drum-pad">E<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio></button>
          <button className="drum-pad">A<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"className="clip" id="A"></audio></button>
          <button className="drum-pad">S<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio></button>
          <button className="drum-pad">D<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio></button>
          <button className="drum-pad">Z<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio></button>
          <button className="drum-pad">X<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio></button>
          <button className="drum-pad">C<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

var allKeys = []

window.onload = function () {
const drumpad = document.getElementsByClassName('drum-pad');
console.log(drumpad);
for (var i = 0; i < drumpad.length; i++) {
  drumpad[i].id = `Button${drumpad[i].innerText}`
  allKeys.push(drumpad[i].innerText)
  drumpad[i].addEventListener('click', function (event) {
    event.target.children[0].play()
    let test = event.target.children[0].src
    console.log(test, test.slice(test.indexOf('drums') + 6, test.length));
    document.getElementById('displayString').innerHTML = test.slice(test.indexOf('drums') + 6, test.length)
  })
}
}

document.addEventListener("keypress", function onEvent(event) {
  // For loop may be unneccesary
  console.log(event.key.toUpperCase())
  for (var i = 0; i < allKeys.length; i++) {
    if (event.key.toUpperCase() == allKeys[i]) {
      console.log(event.key);
      let test = document.getElementById(event.key.toUpperCase()).src
      document.getElementById(event.key.toUpperCase()).play()
      document.getElementById('displayString').innerHTML = test.slice(test.indexOf('drums') + 6, test.length)
    }
  }
});