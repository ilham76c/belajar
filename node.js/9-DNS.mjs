import dns from 'dns/promises';

const dnsInfo = await dns.lookup('www.pacman97.blogspot.com');

console.info(dnsInfo);