import React from 'react';
import HelloWorld from './pages/HelloWorld'
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            status: false
        }
    }
    render() {
        return (
            <div className="App">
                <HelloWorld></HelloWorld>
            </div>
        );
    }
}

export default App;

