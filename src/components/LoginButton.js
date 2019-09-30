import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button/Button';
import GithubIcon from './GithubIcon';
import './LoginButton.css';

const authorizeUrl = process.env.REACT_APP_GITHUB_AUTHORIZE_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;
const scope = 'user';

class LoginButton extends Component {
  render() {
    return (
      <Button
        raised
        accent
        href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}>
        <GithubIcon /> Login with GitHub
      </Button>
    );
  }
}

export default LoginButton;
