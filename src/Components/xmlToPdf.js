import React from "react";

export default class xmlToPdf extends React.Component {

    render() {
        const header = {
            flex: 10,
            backgroundColor: 'rgb(50, 50, 100)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 40,
            paddingTop: 50,
            paddingBottom: 50,
        }

        const headerText = {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
            padding: 10,
        }


        const pdf = require('xml-to-pdf');
        const basePath = '../../XML/ex2.xml';
        const destFile = '../../pdf/test.pdf'

        pdf.toFile(xml, basePath, destFile, (err) => { });
        return (
            <div>
                <h1> HOLAA </h1>
            </div>
        );
    }
}
