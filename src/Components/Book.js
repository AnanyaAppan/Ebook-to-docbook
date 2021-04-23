import { Title } from "@material-ui/icons";
import React from "react";
import {withRouter} from 'react-router-dom';
import App from "./Book/App.tsx";

class Book extends React.Component{

    state = {
        xml : null,
        options_dict : [],
        temp_new: {}
    }

    insertXML = (path) =>  { 
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

    updateXML = (path, payload, indexToUpdate) => {
        var xml = this.state.xml;
        if (path.length === 1) {
            if (xml.documentElement.childNodes[indexToUpdate + 1].childNodes[0]) {
                xml.documentElement.childNodes[indexToUpdate + 1].childNodes[0].childNodes[0].nodeValue = payload.value
            }
        }
        else if (path.length === 2) {
            xml.documentElement.childNodes[path[1] + 1].childNodes[indexToUpdate + 1].childNodes[0].nodeValue = payload.value
        }
        this.setState({
            xml: xml
        }, () => { console.log(this.state.xml) })
    }


    componentDidMount(){
        console.log('Hehehehehehehe');
        this.setState({
            xml : this.props.location.state.xml
        },()=>{
            // console.log(this.state.xml.getElementsByTagName("title")[0].childNodes[0].nodeValue)
            console.log(this.state.xml)
            var temp_new = this.state.temp_new;
            var options_dict = this.state.options_dict;
            var chapters =  this.state.xml.documentElement.childNodes;
            // temp_new['label'] = titleText;
            // temp_new['value'] = titleText;
             temp_new['label'] = '';
            temp_new['value'] = '';
            temp_new['options'] = [];
            console.log('temp_new ', temp_new);
            for(var j = 1; j < chapters.length; j++){
                var temp_new1 = {};
                var temp = [];
                temp.push(chapters[j]);
                temp_new1['label'] = chapters[j].Title;
                temp_new1['value'] = chapters[j].Title;
                temp_new['options'].append(temp_new1);
                var node, chapterContent = chapters[j].childNodes;
                for(var i = 0; i < chapterContent.length; i++)
                {
                    node = chapterContent[i];
                    temp.push(node);
                    if(node.nodeType !== Node.TEXT_NODE) {
                        console.log(node.textContent);
                    }
                }
                options_dict.push(temp);
                console.log('hehedict', temp);
            }
            console.log('optionsdict ', options_dict);
            console.log('heheooptions', temp_new);
            // console.log("dict", options_dict);
            // var node, childNodes = this.state.xml.getElementsByTagName("chapter")[0].childNodes;
        });
    }


    render(){
        return(
            <div>
                <App insertXml={this.insertXML} updateXml = {this.updateXML}/>
            </div>
        )
    }
}

export default withRouter(Book);