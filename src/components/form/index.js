import React from 'react';
import '../../styles/form.scss'

/**
 * Form clas/componet
 * @description retuurns a form with labels that are names after the different CRUD operations. Also returns a go button and a text area
 */
class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.callApi}>
        <section>
          <input
            className="wide"
            type="text"
            name="url"
            placeholder="URL"
            onChange={this.props.handleChange}
          />
          <div id="methods" onChange={this.props.handleChange}>
            <label>
              <input type="radio" name="method" value="GET" />
              <span>GET</span>
            </label>
            <label>
              <input type="radio" name="method" value="POST" />
              <span>POST</span>
            </label>
            <label>
              <input type="radio" name="method" value="PUT" />
              <span>PUT</span>
            </label>
            <label>
              <input type="radio" name="method" value="PATCH" />
              <span>PATCH</span>
            </label>
            <label>
              <input type="radio" name="method" value="DELETE" />
              <span>DELETE</span>
            </label>
            <button type="submit">Go</button>
          </div>
          <section>
            <div id="body">
              <textarea
                placeholder="Raw JSON body"
                name="requestbody"
                onChange={this.props.handleChange}
                disabled={this.props.isTextboxDisable}
              />
            </div>
          </section>
        </section>
        <section />
      </form>
    );
  }
}

export default Form;