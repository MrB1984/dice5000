import React, {Component} from 'react';
import Posts from "./posts"
import './App.css';


class App extends Component{
state={
  hair: "brown",
  likes: ["mike", "john"],
  input: ""
}

handleChangeInput = (e) => {
  this.setState({
    input: e.target.value
  })
}

  render(){
    return(
      <div>
{this.state.hair}
likes: {this.state.likes.length}

<Posts info={this.state.hair}/>
<input onChange={this.handleChangeInput} value={this.state.input}/>

{this.state.input}
      </div>
    )
  }
}


export default App;
