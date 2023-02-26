import React from 'react';
import GoogleLogin from 'react-google-login';

function GoogleLoginButton() {
  console.log("GoogleLoginButton");

    const onSuccess = (response) => {
        console.log("onSuccess :: response :: ", response);
    };

    const onFailure = (error) => {
        console.log("onFailure :: error :: ", error);
    };

  return (
    <GoogleLogin
      clientId="1020336237076-038a3b00nth32pp49266f31sm4a5qfr6.apps.googleusercontent.com"
      buttonText="Google 로그인"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      // clientpw="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"
      />
  );
}

export default GoogleLoginButton;
