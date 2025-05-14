
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'play.capenw.org', // Buraya sunucu IP'sini yaz
  port: 25565,           // Sunucu portu (değiştirmen gerekebilir)
  username: 'Sayiman', // Kullanmak istediğin kullanıcı adı
  auth: 'offline'        // Crackli giriş için 'offline' olmalı
})

bot.once('spawn', () => {
  console.log('Bot sunucuya girdi.')

  setTimeout(() => {
    bot.chat('/login Mansayi00')
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
