import React, { Component } from 'react';
import './assets/styles/App.css';
import axios from 'axios';

import Header from './components/Header.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      area: '',
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
        .then(response => this.setState({area: response.data.result.admin_district}));
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <form onSubmit={(e) => {e.preventDefault(); this.handleSubmit()}}>
            <label>
              Find a takeaway near you
              <input type="text" onChange={e => this.setState({ text: e.target.value })} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          { this.state.area ? <p>Here are the takeaways for {this.state.area}:</p> : '' }
        </main>
      </div>
    );
  }
}

export default App;
