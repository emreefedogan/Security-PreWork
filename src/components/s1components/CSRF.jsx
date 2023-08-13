

export default function CSRF() {
  return (
    <div>
        <h2>Cross-Site Request Forgery (CSRF) Nedir?</h2>
        <p>
          Cross-Site Request Forgery (CSRF), saldırganın bir kullanıcının tarayıcısında yetkisiz istekleri yürütmesini sağlamak için kullanılan bir saldırı türüdür. Bu tür saldırılar, kullanıcının oturum açıkken başka bir web sitesine istekler göndermesi sonucu meydana gelir.
        </p>

        <h3>Neden Önemlidir?</h3>
        <p>
          CSRF saldırıları, saldırganların kullanıcı adına yetkisiz işlemler gerçekleştirmesine olanak tanır. Kullanıcının tarayıcısı aracılığıyla, kullanıcının haberi olmadan hesapta değişiklikler yapılabilir, e-posta adresi veya şifre gibi hassas bilgiler değiştirilebilir.
        </p>

        <h3>Örnekler ve Senaryolar:</h3>
        <ul>
          <li>Parola Değiştirme: Saldırgan, kullanıcının haberi olmadan tarayıcıda oturum açıkken, kötü niyetli bir web sitesini ziyaret ederek kullanıcının parolasını değiştirebilir.</li>
          <li>Hesap Silme: Kullanıcının oturum açıkken, saldırganın oluşturduğu bir web sitesine ziyaret ederek hesabını silmeye yönlendirilmesi sağlanabilir.</li>
        </ul>

        <h3>Nasıl Önlenir?</h3>
        <ul>
          <li>CSRF belirteci (CSRF token) kullanılmalıdır. Her istek için benzersiz bir belirteç oluşturularak, sadece doğru kaynaktan gelen isteklere izin verilir.</li>
          <li>Sensitif işlemler için ek doğrulama adımları (örneğin, parola onayı) gereklidir.</li>
          <li>HTTP Başlıkları doğru bir şekilde ayarlanmalıdır (örneğin, SameSite çerez politikası).</li>
          <li>Güvenlik duvarları (WAF) kullanarak gelen isteklerin denetlenmesi ve zararlı isteklerin engellenmesi sağlanmalıdır.</li>
        </ul>

        <p>
          Sonuç olarak, Cross-Site Request Forgery (CSRF) saldırıları, kullanıcıların haberi olmadan istenmeyen işlemlerin gerçekleştirilmesine olanak tanıyan ciddi bir güvenlik tehdididir. Bu tür saldırılara karşı koruma sağlamak için doğru güvenlik önlemlerini almak önemlidir.
        </p>
      </div>
  )
}
