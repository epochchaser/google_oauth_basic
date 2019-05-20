import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  GOOGLE_AUTH_REDIRECT_URI,
  REQUEST_TOKEN_URI,
  CALENDAR_LIST_API,
  GRANT_TYPE_REFRESH,
  GRANT_TYPE_CODE
} from '../../constant/Contant';
import './GoogleOAuthCallBack.scss';

const GoogleOAuthCallBack = ({ location, match }) => {
  const [code, setCode] = useState(null);

  const [access_token, setAccess_token] = useState(null);
  const [refresh_token, setRefresh_token] = useState(null);
  const [expires_in, setExpires_in] = useState(null);
  const [token_type, setToken_type] = useState(null);

  const setAuthInfo = info => {
    setAccess_token(info.access_token);
    setRefresh_token(refresh_token ? refresh_token : info.refresh_token);
    setExpires_in(info.expires_in);
    setToken_type(info.token_type);
  };

  const requestAccessToken = async code => {
    if (!code) return;

    setCode(code);
    try {
      const res = await axios.post(REQUEST_TOKEN_URI, {
        code: code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: GOOGLE_AUTH_REDIRECT_URI,
        grant_type: GRANT_TYPE_CODE
      });

      const config = {
        headers: { Authorization: `Bearer ${res.data.access_token}` }
      };
      const calenRes = await axios.get(CALENDAR_LIST_API, config);

      setAuthInfo(res.data);
      console.log('Calendar Info : ', calenRes);
    } catch (err) {
      console.log('error : ', err);
    }
  };

  const requestRefreshToken = async () => {
    if (!refresh_token) return;

    try {
      console.log(refresh_token);
      const res = await axios.post(REQUEST_TOKEN_URI, {
        refresh_token: refresh_token,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: GRANT_TYPE_REFRESH
      });

      const config = {
        headers: { Authorization: `Bearer ${res.data.access_token}` }
      };
      const calenRes = await axios.get(CALENDAR_LIST_API, config);

      setAuthInfo(res.data);
      console.log('Calendar Info : ', calenRes);
    } catch (err) {
      console.log('error : ', err);
    }
  };

  useEffect(() => {
    const query = queryString.parse(location.search);

    requestAccessToken(query.code);
  }, []);

  return (
    <div className="GoogleOAuthCallBack-root-container">
      GoogleOAuthCallBack
      <h3>Code</h3>
      {code}
      <h3>Client Id</h3>
      {CLIENT_ID}
      <h3>Client Secret</h3>
      {CLIENT_SECRET}
      <h3>Token Type</h3>
      {token_type}
      <h3>Redirect Uri</h3>
      {GOOGLE_AUTH_REDIRECT_URI}
      <div>
        <h3>Access Token</h3>
        {access_token}
        <h3>Refresh Token</h3>
        {refresh_token}
        <h3>Expires in</h3>
        {expires_in}
        <h3>Token Type</h3>
        {token_type}
      </div>
      <div
        className="GoogleOAuthCallBack-refresh-token-button"
        onClick={requestRefreshToken}
      >
        Request Refresh Token
      </div>
    </div>
  );
};

export default withRouter(GoogleOAuthCallBack);
