import React, { Component } from "react";
import { Classification as ClassificationType } from "./app/types";
import { Dropdown } from "./app/dropdown";
import "./index.css";
import { ThemeProvider } from "./theme";
import { Root } from "./app/styled-components";
import { Classification } from "./image-segmentation/classification";
import { defaultState } from "./default-state";
import { Row } from "./ui";

<<<<<<< HEAD
class App extends Component<{ insertXml: any; updateXml: any }, {}> {
=======
class App extends Component <{insertXml : any, updateXML : any},{}>{
>>>>>>> 2dd30981333a7231ac234524cce93c9decb35cc3
  state = defaultState;
  onChange = (classification: ClassificationType) =>
    this.setState({ ...this.state, classification });
  dropdownClicked = (index: number) =>
    this.setState(state => ({
      ...state,
      dropdownPath: [...this.state.dropdownPath, index]
    }));
  dropdownClosed = () =>
    this.state.dropdownPath.length > 1
      ? this.setState(state => ({
          ...state,
          dropdownPath: this.state.dropdownPath.slice(0, -1)
        }))
      : null;
  onAnswer = (answer: string[]) =>
    this.setState(state => ({
      ...state,
      answer: answer
    }));

  render() {
    return (
      <ThemeProvider>
        <Root>
          <Row>
            <Dropdown
              {...this.state}
              onChange={this.onChange}
              onDropdownClick={this.dropdownClicked}
              onClose={this.dropdownClosed}
              insertXml={this.props.insertXml}
              updateXml={this.props.updateXml}
            />
            <Classification
              highlighted={false}
              answer={this.state.answer}
              onAnswer={this.onAnswer}
              field={this.state.classification}
            />
          </Row>
        </Root>
      </ThemeProvider>
    );
  }
}

export default App;
