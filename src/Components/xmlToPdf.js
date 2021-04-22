import React from "react";

export default class XmlToPdf extends React.Component {

    exportAsPdf = () => {
        console.log("exporting as pdf!")
        const exec = require("child_process").exec
        exec('ls', (err, stdout, stderr) => console.log(stdout))

        // exec("ls -la", (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`)
        //     }
        //     if (stderr) {
        //         console.log(`stderr: ${stderr}`)
        //     }
        //     console.log(`stdout: ${stdout}`)
        // });  
    }

    
    render() {
        return (
            <div>
                <h3> Convert to pdf</h3>
                <button onClick={this.exportAsPdf}>To PDF</button>
            </div>
        );
    }
}
