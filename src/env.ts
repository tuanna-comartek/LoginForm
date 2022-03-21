export interface ENV {
  apiEndPoint: string;
  root: string;
  pageTitle: string;
  tokenKey: string;
  appName: string;
  apiSubscriptionEndPoint: string;
  languageKey: string;
  formatDate: string;
}

const cwd = process.cwd();
const root = __dirname.replace(`${cwd}`, '.');
const env: ENV = {
  apiEndPoint: process.env.REACT_APP_API_END_POINT || '',
  apiSubscriptionEndPoint: process.env.REACT_APP_API_SUBSCRIPTION_END_POINT || '',
  root,
  pageTitle: process.env.REACT_APP_PAGE_TITLE || '',
  tokenKey: process.env.REACT_APP_TOKEN_KEY || '',
  appName: process.env.REACT_APP_NAME || '',
  languageKey: process.env.REACT_APP_LANGUAGE_KEY || '',
  formatDate: process.env.REACT_APP_FORMAT_DATE || '',
};

export default env;
