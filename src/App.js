import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shoes:[]};
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/shoe')
      .then(res => res.json())
      .then(data =>this.setState({shoes:data}));
  }
  render() {
    return (
      <div>
        <h1>Shoe Paradise</h1>
        <ul>
          {this.state.shoes.map((s) => {
            return (
              <div style={{padding: 10}}>
                <li>{s.size}</li>
                <li>{s.brand_name}</li>
                <li>{s.manufacturer}</li>
                <li>{s.color}</li>
                <li>{s.material}</li>
                <li>{s.shoe_type}</li>
                <li>{s.fasten_type}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
