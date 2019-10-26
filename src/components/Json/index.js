import '../../styles/json.scss';
import React from 'react';
import ReactJson from "react-json-view";

/**
 * Json class/component
 * @description returns a special type of form specifically for json viewing
 */
class Json extends React.Component {
  render() {
    return (
      <form>
        <div id="json">
          <ReactJson
            name="headers"
            enableClipboard={false}
            src={this.props.header}
          />
          <ReactJson
            name="response"
            enableClipboard={false}
            src={this.props.response}
          />
        </div>
      </form>
    );
  }
}

export default Json;