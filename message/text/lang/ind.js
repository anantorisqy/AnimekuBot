/* eslint-disable quotes */
const { prefix } = require('../../../config.json')

exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Format salah! Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${prefix}${cmd}* tidak ditemukan!`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan register dengan cara ketik:\n*${prefix}register* nama | umur`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `
*── 「 HALL OF SHAME 」 ──*

Total user diblokir: *${blockNumber.length}*\n
    `
}

exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja.`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}



exports.notRegistered = () => {
    return `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}register* nama | umur`
}

exports.registered = (name, age, userId, time, serial) => {
    return `
*── 「 REGISTRATION 」 ──*
    
Akun kamu telah terdaftar dengan data:
➸ *Nama*: ${name}
➸ *Umur*: ${age}
➸ *ID*: ${userId}
➸ *Waktu pendaftaran*: ${time}
➸ *Serial*: ${serial}

Catatan:
Jangan pernah menyebarkan data *serial* ke pada siapapun!

Ketik *${prefix}rules* terlebih dahulu ya~
    `
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.daily = (time) => {
    return `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`
}

exports.musiclimit = () => {
    return `Ukuran Music Terlalu Besar!`
}

exports.videoLimit = () => {
    return `Ukuran video terlalu besar!`
}

exports.joox = (result) => {
    return `
*── 「 JOOX 」 ──*

Lagu ditemukan!
➸ *Artist*: ${result[0].penyanyi}
➸ *Judul*: ${result[0].judul}
➸ *Album*: ${result[0].album}
➸ *Ext*: ${result[0].ext}
➸ *Size*: ${result[0].filesize}
➸ *Durasi*: ${result[0].duration}

Media sedang dikirim, mohon tunggu...
    `
}

exports.gsm = (result) => {
    return `
*── 「 GSMARENA 」 ──*

➸ *Model HP*: ${result.title}
➸ *Spesifikasi*: ${result.spec}
    `
}

exports.receipt = (result) => {
    return `
*${result.title}*

${result.desc}

➸ *Bahan*: ${result.bahan}
➸ *Langkah*:
${result.cara}
    `
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `
*── 「 YOUTUBE 」 ──*

➸ *Judul*: ${title}
➸ *Channel*: ${channel}
➸ *Durasi*: ${duration}
➸ *Views*: ${views}
➸ *Link*: ${urlyt}
    `
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `
*── 「 USER INFO」 ──*

➸ *Username*: ${username}
➸ *Status*: ${status}
➸ *Premium*: ${premi}
➸ *Banned*: ${benet}
➸ *Admin*: ${adm}

=_=_=_=_=_=_=_=_=_=_=_=_=

*── 「 PROGRESS 」 ──*

➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
    `
}

exports.detectorOn = (name, formattedTitle) => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

Perhatian untuk penghuni grup *${(name || formattedTitle)}*
Grup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.

Sekian terima kasih.
- Admin *${(name || formattedTitle)}*
    `
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Perhatian untuk penghuni grup *${(name || formattedTitle)}*
Grup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.

Sekian terima kasih.
- Admin *${(name || formattedTitle)}*
    `
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan*!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

Kamu mengirim link group chat!
Maaf tapi kami harus mengeluarkan mu...
    `
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `
*── 「 AFK MODE 」 ──*
    
Fitur AFK berhasil *diaktifkan*!
➸ *Username*: ${pushname}
➸ *Alasan*: ${reason}
    `
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `
*── 「 AFK MODE 」 ──*

Sssttt! Orangnya lagi AFK, jangan diganggu!
➸ *Alasan*: ${getReason}
➸ *Sejak*: ${getTime}
    `
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.gcMute = () => {
    return `
*── 「 MUTED 」 ──*
    
Hanya admin yang dapat mengirim pesan ke grup ini.
    `
}

exports.gcUnmute = () => {
    return `
*── 「 UNMUTED 」 ──*

Sekarang semua anggota dapat mengirim chat di grup ini.
    `
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `
*── 「 PLAY STORE 」 ──*
    
➸ *Nama*: ${title}
➸ *ID*: ${app_id}
➸ *Developer*: ${developer}
➸ *Gratis*: ${free}
➸ *Harga*: ${price}
➸ *Deskripsi*: ${description}
    `
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `
*── 「 SHOPEE 」 ──*

➸ *Nama*: ${nama}
➸ *Harga*: ${harga}
➸ *Terjual*: ${terjual}
➸ *Lokasi*: ${shop_location}
➸ *Link produk*: ${link_product}
➸ *Deskripsi*: ${description}
    `
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `
*── 「 REGISTERED 」 ──* 

Akun ditemukan!
➸ *Nama*: ${name}
➸ *Umur*: ${age}
➸ *ID*: ${userId}
➸ *Waktu pendaftaran*: ${time}
➸ *Serial*: ${serial}
    `
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `
*── 「 PLAY 」 ──*

➸ *Judul*: ${result.title}
➸ *Durasi*: ${result.duration}
➸ *Link*: ${result.url}

Media sedang dikirim, mohon tunggu...
    `
}

exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Kamu telah mengirim link NSFW!
Maaf, tapi aku harus mengeluarkan mu...
    `
}

exports.ageOld = () => {
    return `Kamu terlalu tua untuk menggunakan fitur ini! Mohon kembali ke masa muda anda agar bisa menggunakannya.`
}

exports.menuText = () => {
    return `
╔══❉ *𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫 (VF)* ❉═══
║
║ Untuk spasi teks menggunakan *+*
║ Contoh: ${prefix}text1 neon kael+bot
║
╟⊱ *${prefix}text1 burnpaper* _teks_
╟⊱ *${prefix}text1 candlemug* _teks_
╟⊱ *${prefix}text1 lovemsg* _teks_
╟⊱ *${prefix}text1 mugflower* _teks_
╟⊱ *${prefix}text1 narutobanner* _teks_
╟⊱ *${prefix}text1 paperonglass* _teks_
╟⊱ *${prefix}text1 romancetext* _teks_
╟⊱ *${prefix}text1 shadowtext* _teks_
╟⊱ *${prefix}text1 tiktokeffect* _teks_
║
╚══❉ *BocchiBot* ❉════
    `
}

exports.fakeLink = () => {
    return `Ups, link ini terlihat mencurigakan. Demi keamanan grup, aku harus mengeluarkan mu...\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}

exports.randomQuran = (ranquran) => {
    return `
*── 「 AL-QUR'AN 」 ──*

*Nama surah*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Arti*: ${ranquran.data.result.arti}
*Surat ke*: ${ranquran.data.result.nomor}
*Keterangan*: ${ranquran.data.result.keterangan}
*Link audio*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${prefix}hadis bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${prefix}hadis muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${prefix}hadis tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${prefix}hadis nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${prefix}hadis ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${prefix}hadis abudaud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${prefix}hadis malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${prefix}hadis ibnumajah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${prefix}hadis darimi 3
    `
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Limit penggunaan kamu telah habis! Silakan lakukan hal berikut:
❏ *_Tunggu hingga jam 00:00 WIB_*
    `
}

exports.asmaulHusna = (assna) => {
    return `
*── 「 ASMAUL HUSNA 」 ──*

*${assna.name}*
❏ *Asmaul husna ke*: ${assna.number}
❏ *Pelafalan*: ${assna.transliteration}
❏ *Inggris*: ${assna.en.meaning}
    `
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 REMINDER 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.id.replace('@c.us', '')}
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 REMINDER 」 ──*

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Pesan*: ${messRemind}`
}

exports.nameChanged = (q) => {
    return `Username berhasil diubah ke *${q}*`
}

exports.menu = (pushname, level, maRole, jumlahUser) => {
    return `
[Pengumuman]
Untuk Bisa Mengakses Menu 7 Harus Mendapatkan Role *ANAK-DAJJAL* Thanks.

Hallo ${pushname}, Berikut Adalah Menu Command dari Bot ini: 

*${prefix}menu 1* [Buku/Novel]
*${preifx}menu 2* [Music]
*${prefix}menu 3* [Video]
*${prefix}menu 4* [Gambar]
*${prefix}menu 5* [News]
*${prefix}menu 6* [Game/Fun]
*${prefix}menu 7* [NSFW]
*${prefix}menu 8* [Profile]
*${prefix}menu 9* [About Bot]
*${prefix}menu 10* [A-Cash]

Statistik Bot: 
Nickname: ${pushname}
Level: ${level}
Role: ${maRole}
Member: ${jumlahUser}

    `
}

exports.Buku = (pushname) => {
    return `
Hai ${pushname}, Berikut Adalah Command dari Buku: 


    `
}
exports.Music = (pushname) => {
    return `
Hai ${pushname}, Berikut Adalah Command dari Music:

    `
}
exports.Video = (pushname) => {
    return `
Hai ${pushname}, Berikut Adalah Command dari Video:
   `
}
