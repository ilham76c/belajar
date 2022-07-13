import { URL } from 'url';

const url = new URL('https://pacman97.blogspot.com/search/label/Apache?search=tes');

console.info(url.toString());
console.info(url.href);
console.info(url.protocol);
console.info(url.host);
console.info(url.pathname);
console.info(url.searchParams);

url.searchParams.append('id', 100);

console.info(url.searchParams);
console.info(url.toString());