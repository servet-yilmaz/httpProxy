const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/*', async (req, res) => {
    const targetUrl = req.params[0];  // URL kısmını almak için
    if (!targetUrl) {
        return res.status(400).send('Lütfen bir URL girin');
    }

    try {
        const response = await axios.get(targetUrl); // Hedef URL'ye istek atıyoruz
        res.send(response.data);  // Gelen HTML içeriğini döndürüyoruz
    } catch (error) {
        res.status(500).send('Bir hata oluştu: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Proxy sunucu çalışıyor: http://localhost:${port}`);
});
