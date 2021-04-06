import React from "react";
import '../App.css'
import Book from './Book/index'
import BookFromScratch from "./Book/index1";

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
        }
        const funStyle = {
            display: 'flex',
            justifyContent: 'space-around'
        };
        return (
            <div>
                <h1 style={descText}> Description of what the application does? </h1>
                <div style={funStyle}>
                    <div>
                        <h1 style={descText}>CRUD operations on an existing book/xml file </h1>
                        <Book />
                    </div>
                    <hr style={lineStyle} />
                    <div>
                        <h1 style={descText}> Creating a book from scratch using xml files from docbook schema</h1>
                        <BookFromScratch />
                    </div>
                </div>
            </div>
        );
    }
}
