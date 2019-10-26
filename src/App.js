import React from 'react';
import superagent from'superagent';

import Form from '.././src/components/form';
import Header from '.././src/components/header';
import Footer from '.././src/components/footer';
import Json from '../src/components/Json';

import './styles/app.scss';
// import './styles/_reset.scss'

/**
 * App class/component
 * Has various state properties for managingg specific points and times. Renders all elements being imported
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      method: "",
      requestbody: "",
      header: {},
      response: {},
      isTextboxDisable: false
    };
  }

  /**
   * @function
   * @param {object} e
   * @description makes a call to the specific url that was passed in and parses out the response and header object
   */

  callApi = e => {
    e.preventDefault();
    let body = this.state.requestbody && JSON.parse(this.state.requestbody);
    superagent(this.state.method, this.state.url)
      .set("Content-Type", "application/json")
      .send(body)
      .then(res => {
        let header = res.header;
        let response = res.body;
        this.setState({ header, response });
      });
  };

  /**
   * @function
   * @param {object} e
   * @description when the get label or the delete label is selected, disable the test area, anything else enable the text area
   *
   */

  handleChange = e => {
    let property = e.target.name;
    let value = e.target.value;
    if (value === "GET" || value === "DELETE") {
      this.setState({ isTextboxDisable: true });
    } else {
      this.setState({ isTextboxDisable: false });
    }
    this.setState({ [property]: value });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form
            callApi={this.callApi}
            handleChange={this.handleChange}
            isTextboxDisable={this.state.isTextboxDisable}
          />
          <Json header={this.state.header} response={this.state.response} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;