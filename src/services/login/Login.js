import React from 'react';
import {
  REQUEST_CODE_URI,
  SCOPE_CALENDAR,
  ACCESS_TYPE,
  GOOGLE_AUTH_REDIRECT_URI,
  RESPONSE_TYPE,
  CLIENT_ID
} from '../../constant/Contant';

const Login = () => {
  const googleAuthForCalendar = `${REQUEST_CODE_URI}?scope=${SCOPE_CALENDAR}&access_type=${ACCESS_TYPE}&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=${GOOGLE_AUTH_REDIRECT_URI}&response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}`;
  return (
    <div>
      <a href={googleAuthForCalendar}>Google OAuth Click</a>
    </div>
  );
};

export default Login;
