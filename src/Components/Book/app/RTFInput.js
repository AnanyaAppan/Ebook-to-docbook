import React, {Component} from 'react';
import RichTextEditor from 'react-rte';


function convertLabelToValue(str) {
  return str.toLowerCase().replace(/ /g, '_');
}

class RTFInput extends Component {
    // static propTypes = {
    //   onChange: PropTypes.func
    // };
    constructor(props){
      super(props);
      this.state = {
        value: RichTextEditor.createValueFromString(this.props.value, 'html')
      }
    }
   
    onChange = (value) => {
      this.setState({value});
      // this.props.onChange(this.state.value.toString('html'))
      this.props.onChange({
        value: convertLabelToValue(this.state.value.toString('html')),
        label: this.state.value.toString('html'),
        options: this.props.options
      })
    }
   
    render () {
      return (
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
        />
      );
    }
  }

export default RTFInput;