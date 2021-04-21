import React from "react";
import {withRouter} from 'react-router-dom';
import App from "./Book/App.tsx";

class Book extends React.Component{

    state = {
        xml : null
    }

    insertXML = (path) => {
        console.log("in insert !")
        var xml = this.state.xml;
        if(path.length === 1){
            var newChap = xml.createElement("chapter");
            var titleText = xml.createTextNode("");
            var newTitle = xml.createElement("title");
            newTitle.appendChild(titleText);
            newChap.appendChild(newTitle);
            xml.documentElement.appendChild(newChap);
        }
        else if(path.length === 2){
            var index = path[1]+1;
            console.log(index);
            var chapter = xml.documentElement.childNodes[index];
            console.log(xml.documentElement.childNodes)
            var paraText = xml.createTextNode("");
            var para = xml.createElement("para");
            para.appendChild(paraText);
            chapter.appendChild(para);
        }
        this.setState({
            xml : xml
        },()=>{console.log(this.state.xml)})
    }

    componentDidMount(){
        this.setState({
            xml : this.props.location.state.xml
        },()=>{
            // console.log(this.state.xml.getElementsByTagName("title")[0].childNodes[0].nodeValue)
            console.log(this.state.xml)
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
            // var node, childNodes = this.state.xml.getElementsByTagName("chapter")[0].childNodes;
        });
    }


    render(){
        return(
            <div>
                <App insertXml={this.insertXML}/>
            </div>
        )
    }
}

export default withRouter(Book);