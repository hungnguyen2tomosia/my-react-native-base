import {Linking} from 'react-native';
import qs from 'qs';

// https://github.com/tiaanduplessis/react-native-email
export const sendEmail = async (to, {cc, bcc, subject, body} = {}) => {
  let url = 'mailto:';

  const toStr = Array.isArray(to) ? to.join(',') : to;
  url += encodeURIComponent(toStr);

  if (cc) {
    cc = Array.isArray(cc) ? cc.join(',') : cc;
  }

  if (bcc) {
    bcc = Array.isArray(bcc) ? bcc.join(',') : bcc;
  }

  const query = qs.stringify({cc, bcc, subject, body});

  if (query.length) {
    url += `?${query}`;
  }

  const supported = await Linking.canOpenURL(url);

  if (!supported) {
    return Promise.reject(new Error('Provided URL can not be handled'));
  }

  return Linking.openURL(url);
};
