

export default function SQL() {
  return (
    <>
    <div>
      <h2>SQL Injection (SQLi) Nedir?</h2>
      <p>
        SQL Injection (SQLi), kötü niyetli saldırganların web uygulamalarına veya sistemlere kötü amaçlı SQL sorguları enjekte etmesi sonucu ortaya çıkan bir güvenlik açığıdır. Bu tür saldırılar, uygulamaların veritabanıyla etkileşim kurduğu noktalarda meydana gelir.
      </p>

      <h3>Neden Önemlidir?</h3>
      <p>
        SQL Injection saldırıları, saldırganların uygulamanın veritabanına yetkisiz erişim elde etmesine, verileri çalmalarına veya değiştirmelerine, hatta bazen tüm veritabanını silmelerine olanak tanır. Bu tür saldırılar, hassas verilerin tehlikeye girmesine ve gizliliğin ihlal edilmesine neden olabilir.
      </p>

      <h3>Örnekler ve Senaryolar:</h3>
      <ul>
        <li>Temel SQL Injection: Kullanıcı giriş alanına, giriş yapılmadan önce gelen SQL sorgusunu manipüle ederek, oturum açma işlemini atlayabilir ve yetkisiz erişim elde edebilir.</li>
        <li>Veri Sızdırma: Saldırgan, bir web formuna özel SQL kodlarını ekleyerek, veritabanından hassas kullanıcı bilgilerini çalabilir, böylece kimlik avı saldırılarına yol açabilir.</li>
        <li>Veritabanı Silme: SQL Injection kullanarak, saldırgan veritabanına zararlı kodlar enjekte edebilir ve tüm verileri silme veya bozma riskini taşıyabilir.</li>
        <li>Etkileşimli Saldırılar: SQL Injection saldırıları kullanılarak web uygulamasının davranışını değiştirmek, kullanıcıların hesaplarını ele geçirmek veya özel içeriğe erişmek mümkün olabilir.</li>
      </ul>

      <h3>Nasıl Önlenir?</h3>
      <ul>
        <li>Kullanıcı girdileri dikkatlice denetlenmelidir. Kullanıcı girişlerinin güvenli bir şekilde işlendiğinden emin olunmalıdır.</li>
        <li>Parametreli sorgular veya hazırlanmış ifadeler kullanarak veritabanı sorguları oluşturulmalıdır.</li>
        <li>Güvenlik duvarları (WAF) ve güvenlik testleri kullanarak uygulamaların düzenli olarak taranması sağlanmalıdır.</li>
        <li>Uygulama ve veritabanı sunucusu güncellemeleri düzenli olarak yapılmalıdır.</li>
      </ul>

      <p>
        Sonuç olarak, SQL Injection (SQLi) saldırıları, güvensiz kodlama uygulamalarından kaynaklanan ciddi güvenlik açıklarıdır. Bu tür saldırıları önlemek, web uygulamalarının güvenliğini sağlamak için önemlidir.
      </p>
      
      <div>
        <h2>SQL Injection (SQLi) Senaryoları</h2>
        <p>
          SQL Injection (SQLi) saldırılarının farklı senaryolarını anlamak, uygulamalarınızı korumak için önemlidir. İşte bazı senaryolar:
        </p>

        <h3>1. Temel SQL Injection</h3>
        <p>
          Örnek Senaryo: Bir kullanıcı giriş formu düşünün. Saldırgan, kullanıcı adı alanına <code>' OR '1'='1</code> gibi bir giriş yaparak oturumu atlayabilir.
        </p>

        <h3>2. Veri Sızdırma</h3>
        <p>
          Örnek Senaryo: Bir e-ticaret sitesi, ürün aramak için bir arama işlevine sahip. Saldırgan, arama kutusuna <code>' OR '1'='1</code> girdiğinde, tüm ürünleri listeleyebilir.
        </p>

        <h3>3. Veritabanı Silme</h3>
        <p>
          Örnek Senaryo: Kullanıcı oturum açma sayfası düşünün. Saldırgan, şifre alanına <code>'; DROP TABLE users;</code> gibi bir giriş yaparsa, "users" tablosu silinebilir.
        </p>

        <h3>4. Etkileşimli Saldırılar</h3>
        <p>
          Örnek Senaryo: Bir forumun yorum bölümü olsun. Saldırgan, yorum alanına <code>'; INSERT INTO comments (comment) VALUES ('Kötü Yorum');--</code> gibi bir giriş yaparak kötü yorumlar ekleyebilir.
        </p>
      </div>
    </div>
    </>

  )
}

