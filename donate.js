.js
const {Module} = require('../main')
const {skbuffer} = require('raganork-bot');
const {MODE} = require('../config');
let auto = MODE == 'public' ? false : true

//================================================
//              IMAGE SENDER SAMPLE 👇
// ===============================================
Module({
  pattern: 'image ?(.*)',
  fromMe: auto,
  desc: 'Sends image',
  use: 'utility',
}, async (m,t) => {
await m.client.sendMessage(m.jid,{image:{url: 'https://i.imgur.com/vKeYuH7.jpeg'}, caption: "SUPPORT OUR WORK BY DONATION upi://pay?mode=02&pa=Q080738120@ybl&purpose=00&mc=7299&pn=PhonePeMerchant&orgid=180001&sign=MEYCIQCTry5GNMe3i6vz1UU24gw69B2LZlEBfSWmOqef8PGncQIhAMCi4MkX5ycddttDsyhPzCda6HYepkAk48TqChrGxJWt&tn=57864366"},'image') 
});
