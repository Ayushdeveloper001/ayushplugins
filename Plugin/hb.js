const { tlnag,cmd,getBuffer,prefix,Config} = require('../lib')
/**
================================================
*@image: Send Image
===============================================
*//
cmd({
  pattern: 'image',
  desc: 'Sends image',
  category: 'gen',
  use:'<does this>',
}, async(Void,citel,text) => {
await Void.sendMessage(citel.chat,{image:{url: 'https://i.imgur.com/SSKIbl6.jpeg'}, caption: "HAPPY BIRTHDAY TO YOU"}) 
});
/**
