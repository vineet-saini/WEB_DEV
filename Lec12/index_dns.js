// const dns = require('node:dns');

// dns.lookup('example.org', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });
// address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6




// const { Resolver } = require('node:dns');
// const resolver = new Resolver();
// resolver.setServers(['4.4.4.4']);

// // This request will use the server at 4.4.4.4, independent of global settings.
// resolver.resolve4('example.org', (err, addresses) => {
//   // ...
// });


// const { Resolver } = require('node:dns');
// const resolver = new Resolver();
// resolver.setServers(['4.4.4.4']);

// // This request will use the server at 4.4.4.4, independent of global settings.
// resolver.getServers('example.org', (err, addresses) => {
//   // ...
// });




// const dns = require('node:dns');
// const options = {
//   family: 6,
//   hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup('example.org', options, (err, address, family) =>
//   console.log('address: %j family: IPv%s', address, family));
// // address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6

// // When options.all is true, the result will be an Array.
// options.all = true;
// dns.lookup('example.org', options, (err, addresses) =>
//   console.log('addresses: %j', addresses));
// // addresses: [{"address":"2606:2800:21f:cb07:6820:80da:af6b:8b2c","family":6}]






