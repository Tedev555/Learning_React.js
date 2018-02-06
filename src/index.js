import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Define component with Function 
function Welcome(props) {

    return <h1>Hello, {props.name}</h1>
}

//Components can refer to other components in their output.
//Components can reuseable
function App() {

    return(
        <div>
            <Welcome name="Ted"/>
            <Welcome name="Kanya"/>
            <Welcome name="Khamphet"/>
        </div>
    )
}
const element = <App />

 ReactDOM.render(element, document.getElementById('root'));
