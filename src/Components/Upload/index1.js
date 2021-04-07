import React from "react";

class BookFromScratch extends React.Component {
    componentDidMount() {

    }

    state = {
        selectedFile: null,
        text: ""
    };

    onChange = (event) => {
        console.log("changing!")
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    onUpload = () => {
        var fr = new FileReader();
        fr.onload = async (e) => {
            const text = (e.target.result)
            console.log(text)
            this.setState({
                text: e.target.result
            })
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(this.state.text, "text/xml");
            console.log(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
        };
        fr.readAsText(this.state.selectedFile);
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.onChange} />
                <button onClick={this.onUpload}></button>
            </div>
        )
    }
}

export default BookFromScratch;



