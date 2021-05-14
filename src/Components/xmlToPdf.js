import React from "react";
import exec from "child_process";

export default class XmlToPdf extends React.Component {

    exportAsPdf = () => {
        console.log("exporting as pdf!")
        // var exec = require("child_process").exec, child;
        // child = exec('ls',
        // function (error, stdout, stderr) {
        //     console.log('stdout: ' + stdout);
        //     console.log('stderr: ' + stderr);
        //     if (error !== null) {
        //          console.log('exec error: ' + error);
        //     }
        // });
        // child();

        exec("ls -la", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`)
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`)
            }
            console.log(`stdout: ${stdout}`)
        });  
    }

    
    render() {
        return (
            <div>
                <h1> Hi </h1>
                <button onClick={this.exportAsPdf}>To PDF</button>
            </div>
        );
    }
}
