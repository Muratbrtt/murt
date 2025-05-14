const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'play.capenw.org', // Buraya sunucu IP'sini yaz
  port: 25565,           // Sunucu portu (değiştirmen gerekebilir)
  username: 'Sayiman', // Kullanmak istediğin kullanıcı adı
  auth: 'offline'        // Crackli giriş için 'offline' olmalı
})

bot.once('spawn', () => {
  console.log('Bot sunucuya girdi.')

  // İlk komutu 3 saniye sonra gönder
  setTimeout(() => {
    bot.chat('/login Mansayi00')
    console.log('/login komutu gönderildi.')

    // Sonraki komutu 3 saniye sonra gönder
    setTimeout(() => {
      bot.chat('/emeksky')
      console.log('/emeksky komutu gönderildi. AFK modu başladı.')

      // Burada sonsuz bekleme var — bot hiçbir hareket yapmaz

    }, 5000)

  }, 10000)
})

bot.on('end', () => {
  console.log('Bot bağlantıyı kaybetti.')
})
