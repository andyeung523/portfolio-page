import React, { Component } from 'react';

class Greeting extends Component {

    componentDidMount() {
        var d = new Date();
        var h = d.getHours();
        if (h >= 12) {
            if (h >= 18)
                document.getElementById("greeting").innerHTML = "Good evening!";
            else
                document.getElementById("greeting").innerHTML = "Good afternoon!";
        }
        else
            document.getElementById("greeting").innerHTML = "Good morning!";
    }

    render() {
        return (
            <div id="hi" class="container-fluid text-center" style={{ color: 'white'}}>
                <p id="greeting"></p>
                <p>Welcome to Andy's portholio.</p>
            </div>
        );
    }
}
export default Greeting;
