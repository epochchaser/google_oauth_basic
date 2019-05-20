const GOOGLE_CALENDAR_API_URI_BASE = 'https://www.googleapis.com/calendar/v3';
export const REQUEST_CODE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
export const REQUEST_TOKEN_URI = 'https://www.googleapis.com/oauth2/v4/token';
export const GOOGLE_AUTH_REDIRECT_URI = 'http://localhost:3000/callback';
export const CALENDAR_LIST_API = `${GOOGLE_CALENDAR_API_URI_BASE}/users/me/calendarList`;

export const CLIENT_ID = '발급받은 클라이언트 ID 이곳에 넣을 것';
export const CLIENT_SECRET = '발급받은 클라이언트 SECRET 이곳에 넣을 것';
export const GRANT_TYPE_CODE = 'authorization_code';
export const GRANT_TYPE_REFRESH = 'refresh_token';

export const SCOPE_CALENDAR =
  'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly';
export const ACCESS_TYPE = 'offline';
export const RESPONSE_TYPE = 'code';
