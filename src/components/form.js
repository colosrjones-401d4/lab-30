import React from 'react';
import {useState} from 'react';
import URL from './url';
import Headers from './headers';


export default function Form(props) {
  const [url, setUrl] = useState(undefined);
  const [type, setType] = useState('GET');
  const [reqBody, setReqBody] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [bearerToken, setBearerToken] = useState(undefined);

  let updateState = async (key, value) => {
    switch (key) {
      case 'url': setUrl(value);
        break;
      case 'type': setType(value);
        break;
      case 'reqBody': setReqBody(value);
        break;
      case 'username': setUsername(value);
        break;
      case 'password': setPassword(value);
        break;
      case 'bearerToken': setBearerToken(value);
        break;
      default: break;
    }
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    props.newRequest(url, type, reqBody);
  }

  return (
    <>
      <form _lpchecked="1" onSubmit={handleSubmit}>
        <URL 
          updateState={updateState}
          type={type}
        />
        <Headers 
          updateState={updateState}
          type={type}
        />
      </form>
    </>
  );
}