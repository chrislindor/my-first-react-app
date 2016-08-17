import React from 'react';


// Class component that can have states
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: 'This is the state txt'}
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <input type='text'
          onChange={this.update.bind(this)}/>
        <h1>
          {this.state.txt} , {this.props.cat}
        </h1>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'This is the default txt',
  cat: 9999999
};
// Stateless Component cannot state
// const App = () => <h1>Hello guys</h1>;

export default App;
