import React from "react";
import {withRouter} from 'react-router-dom';
import App from "./Book/App.tsx";

class Book extends React.Component{

    state = {
        xml : null
    }

    componentDidMount(){
        this.setState({
            xml : this.props.location.state.xml
        },()=>{
            console.log(this.state.xml.getElementsByTagName("title")[0].childNodes[0].nodeValue)
            var chapters =  this.state.xml.documentElement.childNodes;
            for(var j = 1; j < chapters.length; j++){
                var node, chapterContent = chapters[j].childNodes;
                for(var i = 0; i < chapterContent.length; i++)
                {
                    node = chapterContent[i];
                    if(node.nodeType !== Node.TEXT_NODE) {
                        console.log(node.textContent);
                    }
                }
            }
            var node, childNodes = this.state.xml.getElementsByTagName("chapter")[0].childNodes;
        });
    }


    render(){
        return(
            <div>
                <App/>
            </div>
        )
    }
}

export default withRouter(Book);