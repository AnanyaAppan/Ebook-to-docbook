import React from "react";
import '../App.css'
import Book from './Book/index'

export default class HomeComponent extends React.Component {

    render() {
        const descText = {
            fontSize: 18,
            textAlign: 'center',
            padding: 20,
            color: 'black',
        }
        const lineStyle = {
            borderWidth: 0.5,
            borderColor: 'black',
            margin: 20,
        }
        return (
            <div>
                <h1 style={descText}> Description of what the application does? </h1>

                <Book />
            </div>
        );
    }
}
