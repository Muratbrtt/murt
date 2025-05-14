
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'sunucuip.com', // Buraya sunucu IP'sini yaz
  port: 25565,           // Sunucu portu (değiştirmen gerekebilir)
  username: 'LocalNick', // Kullanmak istediğin kullanıcı adı
  auth: 'offline'        // Crackli giriş için 'offline' olmalı
})

bot.once('spawn', () => {
  console.log('Bot sunucuya girdi.')

  setTimeout(() => {
    bot.chat('/login mrt123')
    console.log('Giriş komutu gönderildi.')

    setTimeout(() => {
      bot.chat('/emeksky')
      console.log('Sunucuya girildi.')

      // Sonsuza kadar afk kal
    }, 3000)
  }, 3000)
})

bot.on('end', () => {
  console.log('Bot bağlantıyı kaybetti. Yeniden başlatılabilir.')
})
