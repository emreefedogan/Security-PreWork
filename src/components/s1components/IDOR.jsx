
function IDOR() {
  return (
    <div>
        <h2>Güvensiz Doğrudan Nesne Başvuruları (Insecure Direct Object References - IDOR) Nedir?</h2>
        <p>
          Güvensiz doğrudan nesne başvuruları (IDOR), uygulamanın yetkisiz kullanıcıların normalde erişememesi gereken verilere doğrudan erişmelerine izin veren bir güvenlik açığıdır. Bu tür hatalar, saldırganların başka kullanıcıların veya kaynakların verilerine erişim sağlamasına olanak tanır.
        </p>

        <h3>Neden Önemlidir?</h3>
        <p>
          IDOR saldırıları, hassas verilere yetkisiz erişim sağlayarak gizlilik ihlali ve veri sızıntısı riskini artırabilir. Bu tür saldırılar, kullanıcı gizliliğini tehlikeye atabilir ve ciddi sonuçlara yol açabilir.
        </p>

        <h3>Örnekler ve Senaryolar:</h3>
        <ul>
          <li>Kullanıcı Profili: Uygulama, kullanıcılar arasında geçiş yaparken güvenlik doğrulamasını yeterince kontrol etmezse, saldırgan başka bir kullanıcının profil verilerine erişebilir.</li>
          <li>Dosya Erişimi: Uygulama, kimlik doğrulama veya yetkilendirme olmaksızın dosya yollarına izin verirse, saldırgan hassas belgelere erişebilir.</li>
          <li>Siparişler ve Ödemeler: Uygulama, sipariş veya ödeme referans numaralarını korumazsa, saldırgan başka bir kullanıcının siparişlerine veya ödemelerine erişebilir.</li>
        </ul>

        <h3>Nasıl Önlenir?</h3>
        <ul>
          <li>Kimlik doğrulama ve yetkilendirme işlemleri güvenli bir şekilde uygulanmalıdır.</li>
          <li>Verilere erişim kontrolleri eklenmeli ve güvenliğe dayalı doğrudan nesne başvuruları yapılmalıdır.</li>
          <li>Veri gizleme veya maskeleme teknikleri kullanılmalıdır.</li>
          <li>Güvenlik duvarları (WAF) ve güvenlik testleri kullanarak uygulamalar düzenli olarak taranmalıdır.</li>
        </ul>

        <p>
          Sonuç olarak, güvensiz doğrudan nesne başvuruları (IDOR), yetkisiz erişime izin vererek veri güvenliğini tehlikeye atan ciddi bir güvenlik açığıdır. Bu tür saldırıları önlemek için güvenli veri erişimi ve yetkilendirme mekanizmaları gerekmektedir.
        </p>
      </div>
  )
}

export default IDOR