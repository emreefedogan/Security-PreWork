

function BAASM() {
  return (
    <div>
    <h2>Kırık Kimlik Doğrulama ve Oturum Yönetimi Nedir?</h2>
    <p>
      Kırık kimlik doğrulama ve oturum yönetimi, uygulamanın kullanıcı kimlik doğrulama ve oturum yönetimi süreçlerini güvenli bir şekilde uygulayamadığı durumları ifade eder. Bu tür hatalar, saldırganların yetkisiz erişim elde etmesine ve kullanıcı hesaplarını ele geçirmesine olanak tanır.
    </p>

    <h3>Neden Önemlidir?</h3>
    <p>
      Kırık kimlik doğrulama ve oturum yönetimi, saldırganlara kullanıcıların hesaplarına izinsiz erişim sağlayabilecek bir yol sunar. Bu tür saldırılar, kullanıcı gizliliğini tehlikeye atabilir, kimlik avı saldırılarına yol açabilir ve ciddi sonuçlar doğurabilir.
    </p>

    <h3>Örnekler ve Senaryolar:</h3>
    <ul>
      <li>Oturum Çalma: Saldırgan, güçlü olmayan oturum kimlik doğrulama veya oturum yönetimi nedeniyle bir kullanıcının oturumunu çalabilir.</li>
      <li>Oturum Süresi Uzatma: Saldırgan, oturum süresini uzatma gibi saldırılarla kullanıcının oturumunu uzatabilir.</li>
      <li>Parola Sıfırlama: Kullanıcının parolasını sıfırlama süreci güvenli olmadığında, saldırganlar kullanıcıların parolalarını sıfırlayabilir.</li>
    </ul>

    <h3>Nasıl Önlenir?</h3>
    <ul>
      <li>Güçlü kimlik doğrulama ve oturum yönetimi mekanizmaları kullanılmalıdır.</li>
      <li>Oturum belirteçleri (session tokens) güvenli ve rastgele oluşturulmalıdır.</li>
      <li>Oturum süreleri sınırlanmalı ve oturumların zaman aşımı belirtilmelidir.</li>
      <li>Parola sıfırlama ve kimlik doğrulama süreçleri güvenli bir şekilde tasarlanmalıdır.</li>
    </ul>

    <p>
      Sonuç olarak, kırık kimlik doğrulama ve oturum yönetimi, güvenli kimlik doğrulama ve oturum yönetimi önlemlerinin alınmaması sonucu ortaya çıkan ciddi bir güvenlik açığıdır. Bu tür saldırıları önlemek için uygulamanın güçlü oturum yönetimi ve kimlik doğrulama mekanizmalarıyla korunması gerekmektedir.
    </p>
  </div>
  )
}

export default BAASM