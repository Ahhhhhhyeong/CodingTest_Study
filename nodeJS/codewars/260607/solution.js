/**
 * Complete the method so that it does the following:
 * Removes any duplicate query string parameters from the url (the first occurence should be kept)
 * Removes any query string parameters specified within the 2nd argument (optional array)
 * Examples:
 * stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
 * stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
 * stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
 */

let url1 = 'www.codewars.com?a=1&b=2';
let url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
let url3 = 'www.codewars.com?a=1';
let url4 = 'www.codewars.com';

console.log(stripUrlParams(url1));
console.log(stripUrlParams(url2));
console.log(stripUrlParams(url2, ['b']));

function stripUrlParams(url, paramsToStrip=[]){
  const split = url.split('?');
  const params = split[1] ? split[1].split('&') : [];
  const paramsObj = {};
  params.forEach(param => {
    const [key, value] = param.split('=');
    if(!paramsObj[key] && !paramsToStrip.includes(key)){
      paramsObj[key] = value;
    }
  });
  const newParams = Object.keys(paramsObj).map(key => `${key}=${paramsObj[key]}`).join('&');
  return split[0] + (newParams ? `?${newParams}` : '');
}

