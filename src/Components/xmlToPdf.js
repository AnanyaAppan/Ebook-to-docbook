import React from "react";
import axios from 'axios';
import download from 'downloadjs'

export default class XmlToPdf extends React.Component {

  exportAsPdf = (xmlString) => {
    var data = {
      xml:xmlString.replace(/xmlns=""/g,"")
    };
    axios
      .post("http://localhost:8080/api/pdf", data,{
        responseType: 'blob'
      })
      .then(response => {
        download(response.data, "myBook.pdf", 'application/pdf')
        console.log(response)
        this.setState({ dataId: response.data.id })
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };


  render() {
    return (
      <div>
        <h3> Convert to pdf</h3>
        <button onClick={this.exportAsPdf.bind(this,this.props.xml)}>To PDF</button>
      </div>
    );
  }
}
