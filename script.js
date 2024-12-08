// Sayfa geçiş fonksiyonu
function showPage(page) {
    const pageContent = document.getElementById('page-content');
    switch(page) {
        case 'ekolojik-kredi':
            pageContent.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, geri dönüşüm ve atık yönetimi gibi çevresel sorumlulukların ödüllendirilmesi amacıyla kullanılan bir sistemdir. 
                Her türlü geri dönüştürülebilir atık, doğru bir şekilde ayrıştırılıp toplanarak ekolojik krediye dönüştürülebilir. 
                Bu sistem, çevre bilincini arttırmak ve sürdürülebilir yaşamı desteklemek için önemli bir araçtır.</p>
            `;
            break;
        case 'geri-donusum':
            pageContent.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atıkların yeniden işlenerek kullanılabilir hale getirilmesidir. 
                Geri dönüşüm, doğal kaynakların korunmasına yardımcı olur ve çevre kirliliğini azaltır. 
                Kağıt, plastik, cam ve metal gibi malzemeler geri dönüşüm ile tekrar kullanılabilir. 
                Bu süreç, doğanın daha az zarar görmesini ve enerji tasarrufu sağlanmasını sağlar.</p>
            `;
            break;
        case 'hazirlayanlar':
            pageContent.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p>Danışman Öğretmen: Osman Onuk</p>
                <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case 'bize-ulasin':
            pageContent.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <p>Email: <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></p>
                <p>Okul Adresi: Torbalı Anadolu Lisesi, İzmir</p>
                <p>YouTube Kanalı: <a href="https://youtube.com/@ekolojikkredi?si=esEweBsfz6l6LGVU" target="_blank">Ekolojik Kredi YouTube Kanalı</a></p>
            `;
            break;
        case 'kayit':
            pageContent.innerHTML = `
                <h2>Kayıt Ol</h2>
                <button onclick="showPage('okul-kaydi')">Okul Kaydı</button><br><br>
                <button onclick="showPage('ogrenci-kaydi')">Öğrenci Kaydı</button>
            `;
            break;
        case 'okul-kaydi':
            pageContent.innerHTML = `
                <h2>Okul Kaydı</h2>
                <form id="okulKaydiForm">
                    <label for="okulAdi">Okul Adı:</label>
                    <input type="text" id="okulAdi" required><br><br>

                    <label for="okulSifresi">Okul Şifresi:</label>
                    <input type="password" id="okulSifresi" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'ogrenci-kaydi':
            pageContent.innerHTML = `
                <h2>Öğrenci Kaydı</h2>
                <form id="ogrenciKaydiForm">
                    <label for="ad">Ad:</label>
                    <input type="text" id="ad" required><br><br>

                    <label for="soyad">Soyad:</label>
                    <input type="text" id="soyad" required><br><br>

                    <label for="ogrenciNumarasi">Öğrenci Numarası:</label>
                    <input type="text" id="ogrenciNumarasi" required><br><br>

                    <label for="email">E-Posta:</label>
                    <input type="email" id="email" required><br><br>

                    <label for="telefon">Telefon Numarası:</label>
                    <input type="tel" id="telefon" required><br><br>

                    <label for="okulAdi">Okul Adı:</label>
                    <input type="text" id="okulAdi" required><br><br>

                    <label for="sinif">Sınıf:</label>
                    <input type="text" id="sinif" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'veri-giris':
            pageContent.innerHTML = `
                <h2>Veri Girişi</h2>
                <form id="veriGirisForm">
                    <label for="atikturu">Atık Türü:</label>
                    <select id="atikturu" required>
                        <option value="kağıt">Kağıt</option>
                        <option value="cam">Cam</option>
                        <option value="metal">Metal</option>
                        <option value="organik">Organik</option>
                        <option value="elektronik">Elektronik</option>
                    </select><br><br>

                    <label for="agirlik">Atık Ağırlığı (kg):</label>
                    <input type="number" id="agirlik" required><br><br>

                    <label for="kayitYapan">Kayıt Yapan Kişi:</label>
                    <input type="text" id="kayitYapan" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'veri-goruntuleme':
            pageContent.innerHTML = `
                <h2>Veri Görüntüle</h2>
                <form id="veriGoruntulemeForm">
                    <label for="ogrenciEmail">Öğrenci E-Posta:</label>
                    <input type="email" id="ogrenciEmail" required><br><br>

                    <label for="ogrenciNumarasi">Öğrenci Numarası:</label>
                    <input type="text" id="ogrenciNumarasi" required><br><br>

                    <button type="submit">Görüntüle</button>
                </form>
            `;
            break;
        default:
            pageContent.innerHTML = "<h2>Sayfa Bulunamadı</h2>";
            break;
    }
}

// Öğrenci ve okul kayıt işlemleri
document.getElementById('okulKaydiForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const okulAdi = document.getElementById('okulAdi').value;
    const okulSifresi = document.getElementById('okulSifresi').value;
    alert(`Okul kaydedildi: ${okulAdi}`);
    showPage('kayit'); // Kaydın ardından Kayıt sayfasına dön
});

document.getElementById('ogrenciKaydiForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const ogrenciNumarasi = document.getElementById('ogrenciNumarasi').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const okulAdi = document.getElementById('okulAdi').value;
    const sinif = document.getElementById('sinif').value;
    alert(`Öğrenci kaydedildi: ${ad} ${soyad}`);
    showPage('kayit'); // Kaydın ardından Kayıt sayfasına dön
});

document.getElementById('veriGirisForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const atikTuru = document.getElementById('atikturu').value;
    const agirlik = document.getElementById('agirlik').value;
    const kayitYapan = document.getElementById('kayitYapan').value;
    alert(`Veri kaydedildi: ${atikTuru}, Ağırlık: ${agirlik}kg, Kayıt yapan: ${kayitYapan}`);
    showPage('kayit'); // Veri kaydından sonra Kayıt sayfasına dön
});

document.getElementById('veriGoruntulemeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const ogrenciEmail = document.getElementById('ogrenciEmail').value;
    const ogrenciNumarasi = document.getElementById('ogrenciNumarasi').value;
    alert(`Öğrenci verileri görüntüleniyor: ${ogrenciEmail}`);
    // Öğrenci verilerini burada gösterebilirsiniz
});
