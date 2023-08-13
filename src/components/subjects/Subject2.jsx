import React from 'react';

function Subject2() {
  const imageStyle = {
    display: 'block',      // https://tryhackme.com/module/how-the-web-works
    margin: '0 auto',      // Yatayda ortala
    maxWidth: '100%',      // Maksimum genişlik
    height: 'auto'         // Otomatik yükseklik ayarı
  };

  return (
    <div>
      <h2>Web Nasıl Çalışır? (How the Web Works?)</h2>
      <p>
        Web, "World Wide Web" veya kısaca "web", internet üzerindeki bilgi ve kaynakların bir ağ şeklinde organize edilmiş bir sistemidir.
        Web'in temel amacı, kullanıcıların belirli bir tarayıcı aracılığıyla bilgiye erişmelerini, bu bilgiyi paylaşmalarını ve etkileşimde bulunmalarını sağlamaktır.
        Web'in çalışma prensibi oldukça karmaşık olabilir, ancak temel olarak aşağıdaki bileşenlerden oluşur:
      </p>
      <ul>
        <li><strong>İnternet Altyapısı:</strong> Web'in temelini oluşturan internet, dünya genelinde bilgisayar ağlarının birbiriyle bağlantı kurduğu devasa bir ağdır. Bu ağ, verilerin iletimi için farklı protokoller kullanır.</li>
        <li><strong>Sunucular ve İstemciler:</strong> Web, sunucu ve istemci bilgisayarlar arasında işler. Sunucu, web siteleri, uygulamalar veya içerik sağlayıcılar gibi bilgi kaynaklarını barındırır. İstemci ise bu bilgiye erişmek isteyen kullanıcıların bilgisayarlarıdır. İstemci, genellikle web tarayıcısı adı verilen yazılımları kullanarak sunuculara bağlanır.</li>
        <li><strong>HTTP ve HTTPS Protokolleri:</strong> İstemci ve sunucu arasındaki iletişim HTTP (Hypertext Transfer Protocol) veya daha güvenli olan HTTPS (HTTP Secure) protokolleri üzerinden gerçekleşir. Bu protokoller, istemcinin sunucudan içerik istemesini ve sunucunun bu içeriği ileterek yanıt vermesini sağlar.</li>
        <li><strong>URL (Uniform Resource Locator):</strong> İnternet üzerindeki kaynaklara erişmek için kullanılan adreslerdir. URL'ler, belirli bir web sitesinin veya kaynağın konumunu belirtir. Örneğin, "https://www.example.com" bir URL'dir.</li>
        <li><strong>HTML (Hypertext Markup Language):</strong> Web sayfalarının yapısını ve içeriğini tanımlamak için kullanılan temel işaretleme dilidir. HTML, metin, resimler, bağlantılar ve diğer medya öğelerini düzenlemenin bir yolunu sağlar.</li>
        <li><strong>CSS (Cascading Style Sheets):</strong> Web sayfalarının görünümünü düzenlemek için kullanılan bir dil olan CSS, renkler, fontlar, düzenler ve diğer stil özelliklerini tanımlar. Bu, web sayfalarını daha çekici ve düzenli hale getirmek için kullanılır.</li>
        <li><strong>JavaScript:</strong> Web sayfalarında etkileşimi ve dinamik özellikleri eklemek için kullanılan bir programlama dilidir. JavaScript, kullanıcıların sayfaları etkileşimli hale getirmelerine, formları göndermelerine, içeriği dinamik olarak değiştirmelerine ve daha fazlasını yapmalarına olanak tanır.</li>
      </ul>
      <p><strong>Web'in çalışma süreci şu şekildedir:</strong></p>
      <ol>
        <li>Kullanıcı, web tarayıcısı aracılığıyla bir URL girer veya bir bağlantıya tıklar.</li>
        <li>Tarayıcı, URL'yi alır ve sunucunun IP adresini bulmak için DNS (Domain Name System) sistemini kullanır.</li>
        <li>Tarayıcı, sunucuya bir HTTP veya HTTPS isteği gönderir. Bu istek, tarayıcının isteğinin türüne (GET, POST, vb.) ve istenen kaynağın URL'sine göre şekillenir.</li>
        <li>Sunucu, isteği alır, istenen kaynağı bulur, gerekli işlemleri yapar (örneğin veritabanına erişim), ve tarayıcıya yanıt olarak HTML, CSS, JavaScript dosyaları ve medya gibi içerikleri gönderir.</li>
        <li>Tarayıcı, aldığı bu içerikleri yorumlar ve görüntüler. HTML yapısına göre sayfa düzenini oluşturur, CSS ile stil uygular ve JavaScript kodunu çalıştırır.</li>
        <li>Kullanıcı, görüntülenen sayfa üzerinde etkileşimde bulunabilir, bağlantılara tıklayabilir veya form verileri gönderebilir.</li>
        <li>İhtiyaç duyulduğunda, tarayıcı yeni içerik veya kaynaklar için sunucuya istek gönderebilir. Bu, sayfayı dinamik hale getirir.</li>
        <li>Kullanıcı, istediği bilgiyi görüntüledikten sonra tarayıcıyı kapatabilir.</li>
      </ol>
      <img style={imageStyle} src="https://home.ubalt.edu/abento/650/modelandapplication/img034.gif" alt="Web Çalışma Süreci" />
    
      
    </div>
  );
}

export default Subject2;
