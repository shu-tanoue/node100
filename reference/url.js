const url = require('url');

const myURL = new URL('http://www.hello.com:8000/hello.html?id=34234ewrewfwer');

console.log('href: ',myURL.href);
console.log('toString: ', myURL.toString());

console.log('host: ', myURL.host);
console.log('hostname: ', myURL.hostname);

console.log('pathname: ', myURL.pathname);

console.log('search: ', myURL.search);
console.log('searchParams: ', myURL.searchParams);

myURL.searchParams.append('color', 'white')
console.log('append: ', myURL.searchParams);
console.log('append: ', myURL.search);

myURL.searchParams.forEach((value, name) => {
    console.log('searchParams forEach: ', `${name} : ${value}`);
})