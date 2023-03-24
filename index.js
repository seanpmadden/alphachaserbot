const TelegramBot = require('node-telegram-bot-api');

const botToken = '5942615356:AAFmxa5RvsCza1wKKmf5GVQqxAlmM9tlxaI';
const targetGroup = '-930951049';
const sourceChannels = ['@Kingdom_X100_CALLS', '@bagcalls', '@VegetaBLACKX', '@VegetaCalls',
'@RUGSEXPOSED', '@cryptofrogsgems', '@EDDIESBANGERS', '@shaddensjournal', '@safehavencalls', '@luffysgemscalls', '@Kingdom_X100_CALLS', '@comet_calls',
'@epitaphsanticalls', '@caesars_calls', '@valhallacalls', '@danesanity100x']; // Add the source channels here

const bot = new TelegramBot(botToken, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const fromUsername = msg.from.username;
  
  if (sourceChannels.includes(fromUsername)) {
    bot.forwardMessage(targetGroup, chatId, msg.message_id);
  }
});
