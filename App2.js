import React from 'react';


// Class component that can have states
class App2 extends React.Component {
  constructor(){
    super();
    this.state = {txt: 'This is the state txt'}
    this.updatetxt = this.updatetxt.bind(this)
  }
  updatetxt(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update ={this.updatetxt} />
        <Widget txt={this.state.txt} update ={this.updatetxt} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
    <input type='text'
      onChange={props.update}/>
    <h1>
      {props.txt}
    </h1>
    </div>
  )
};

export default App2;
