import React, { Component } from 'react';
import './assets/styles/App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let validPostcode = postcode => {
      postcode = postcode.replace(/\s/g, "");
      var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
      return regex.test(postcode);
    }

    var endpoint = "https://api.postcodes.io/postcodes/" + this.state.text;

    if (validPostcode(this.state.text)) {
      axios.get(endpoint)
        .then(response => this.setState({address: response.data.result.admin_district}));
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Takeaway Menu App</h1>
        </header>
        <main>
          <form onSubmit={(e) => {e.preventDefault(); this.handleSubmit()}}>
            <label>
              Find a takeaway near you
              <input type="text" onChange={e => this.setState({ text: e.target.value })} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <p>Here are the takeaways for {this.state.address}:</p>
        </main>
      </div>
    );
  }
}

export default App;
