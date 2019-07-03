import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '833149387012-vp9i3tfvlsh7em6fh5am2qhiicm82hm3.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}
export default GoogleAuth;
