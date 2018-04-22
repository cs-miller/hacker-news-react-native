//@flow
import moment from 'moment';

export const toBaseURL = (url: string) =>
  url.replace(/(http(s)?:\/\/)|(www\.)|(\/.*){1}/g, '');
export const fromNow = (time: number) => moment.unix(time).fromNow();
