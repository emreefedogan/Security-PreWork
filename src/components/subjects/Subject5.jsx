

function Subject5() {
  const imageStyle = {
    display: 'block',      // https://tryhackme.com/module/how-the-web-works
    margin: '0 auto',      // Yatayda ortala
    maxWidth: '100%',      // Maksimum genişlik
    height: 'auto'         // Otomatik yükseklik ayarı
  };

  return (
    <div>
    <h1> Stages of an attack
and indicent response (Saldırı Aşamaları ve Olay Yanıtı) </h1>
    <p>
      Bu bileşen, siber saldırı aşamalarını anlamak ve siber olaylara nasıl yanıt verileceğini öğrenmek için oluşturulmuştur. İşte siber güvenlik dünyasının temel konularına genel bir bakış:
    </p>

    <h2>Saldırı Aşamaları</h2>
    <p>
      Bir siber saldırı, genellikle belirli aşamalardan geçer. Bu aşamalar, saldırganın hedef sisteme erişim kazanmasını içerir:
    </p>
    <ol>
      <li>Keşif(Reconnaissance): Saldırgan, hedef sistem hakkında bilgi toplamaya çalışır. Bu bilgiler, zayıf noktaları veya hedef sistemdeki açıkları belirlemeye yardımcı olabilir.</li>
      <li>İlk Sızma(Initial Compromise): Saldırgan, hedef sisteme girmek için ilk adımları atar. Bu aşamada temel sızma işlemleri gerçekleşebilir.</li>
      <li>Yükselme(Elevation of Privileges): Saldırgan, erişimini genişletmeye ve hedef sistemde daha yüksek ayrıcalıklar elde etmeye çalışır.</li>
      <li>Yayılma(Lateral Movement): Saldırgan, içerideki diğer sistemlere yayılmaya çalışarak hareket edebilir. Bu, saldırganın erişimini genişletme çabasıdır.</li>
      <li>Hedefe Ulaşma(Target Achieved): Saldırgan, hedefine ulaşır ve amaçladığı saldırıyı gerçekleştirmeye başlar. Bu, veri sızdırma, kötü amaçlı yazılım dağıtımı gibi eylemleri içerebilir.</li>
    </ol>

    <h2>Olay Yanıtı</h2>
    <p>
      Bir siber olay meydana geldiğinde, etkili bir olay yanıtı süreci izlemek kritiktir:
    </p>
    <ul>
      <li><strong>Algılama(Detection):</strong> Olayın erken aşamalarında tehdidi tespit etmek önemlidir. Güvenlik önlemleri ve izleme araçları bu aşamada devreye girer.</li>
      <li><strong>Değerlendirme(Assessment):</strong> Olayın kapsamını ve etkilerini değerlendirmek, yanıt sürecini doğru bir şekilde yönlendirmek için önemlidir.</li>
      <li><strong>Mitigasyon(Mitigation):</strong> Etkilenen sistemleri izole etmek, saldırıyı durdurmak ve yayılmasını engellemek için adımlar atılır.</li>
      <li><strong>İyileştirme(Remediation):</strong> Saldırının nedenlerini anlamak ve gelecekte benzer olayları önlemek için güvenlik düzeltmeleri yapılır.</li>
      <li><strong>Kurtarma(Recovery):</strong> Etkilenen sistemler ve veriler orijinal durumlarına geri döndürülür.</li>
      <li><strong>İnceleme(Review):</strong> Olayın nedenleri, saldırı taktikleri ve alınan önlemler detaylı bir şekilde incelenir.</li>
      <li><strong>Dokümantasyon(Documentation):</strong> Olayın ayrıntıları, alınan önlemler ve öğrenilen dersler belgelenir.</li>
    </ul>

    <img  style={imageStyle} src="https://cizgiotesi.info/wp-content/uploads/2022/02/O%CC%88lu%CC%88m-Zinciri-Kill-Chain-1024x576.png" alt="Siber Saldırı" />
  </div>
  )
}

export default Subject5