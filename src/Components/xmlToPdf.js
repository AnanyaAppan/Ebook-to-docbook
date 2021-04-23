import React from "react";
import axios from 'axios';
import download from 'downloadjs'

export default class XmlToPdf extends React.Component {
  exportAsPdf = () => {
    var data = {
      xml:
        "<book xmlns='http://docbook.org/ns/docbook' xmlns:xi='http://www.w3.org/2001/XInclude' version='5.0'><title>Hola</title></book>"
    };
    axios
      .post("http://localhost:8080/api/pdf", data)
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
        <button onClick={this.exportAsPdf}>To PDF</button>
      </div>
    );
  }
}
