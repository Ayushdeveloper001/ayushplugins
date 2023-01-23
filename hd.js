const { tlnag,cmd,getBuffer,prefix,Config} = require('../lib')
/**
================================================================================================
*@image: Send Image
===============================================
*//
cmd({
  pattern: 'image',
  desc: 'Sends image',
  category: 'gen',
  use:'<does this>',
}, async(Void,citel,text) => {Void}
await Void.sendMessage(citel.chat,{image:{url: 'https://i.ibb.co/VS9ss9v/images-2-2.jpg'}, caption: "Happy Birthday to you"}) 
});
/**
