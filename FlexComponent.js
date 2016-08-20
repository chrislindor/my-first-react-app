import React from 'react';
import ReactDOM from 'react-dom';


// Class component that can have states
class FlexComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      rangeInp: 0,
      numInp: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      rangeInp: ReactDOM.findDOMNode(this.refs.rangeInp.refs.inp).value,
      numInp: ReactDOM.findDOMNode(this.refs.numInp.refs.inp).value
    })
  }
  render() {
    return (
      <div>
        <NumInput
          ref='rangeInp'
          min={0}
          max={255}
          step={1}
          val={+this.state.rangeInp}
          label="Red"
          update={this.update}
        />

        <NumInput
          ref='numInp'
          min={0}
          max={255}
          step={1}
          type='number'
          val={+this.state.numInp}
          label="Red"
          update={this.update}
        />

      </div>
    );
  }
}

class NumInput extends React.Component {
  constructor() {
    super()
  }

  render() {
    let label = this.props.label !== '' ?
      <label> {this.props.label} | {this.props.val}</label> : ''
    return (
      <div>
      <input ref='inp'
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update} />
        {label}
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
};

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
};


export default FlexComponent;
