import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      div id = "hi" class="container-fluid text-center">
        <p id="greeting"></p>

      Welcome to Andy's portholio.

        </div>

  );
}
<script type="text/javascript">
  var d = new Date();
  var h = d.getHours();

    if(h >=12){
    h >= 18 ? document.getElementById("greeting").innerHTML = "Good evening!" : document.getElementById("greeting").innerHTML = "Good afternoon!"
  }
  else
    document.getElementById("greeting").innerHTML = "Good morning!";
</script>

export default App;
