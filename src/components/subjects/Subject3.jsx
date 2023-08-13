import React from 'react';

function Subject3() {
  return (
    <div>
      <h1>0. Linux Nedir?</h1>
      <p>
        Linux, açık kaynak kodlu, Unix benzeri bir işletim sistemidir.
        Linux çekirdeğine dayalıdır ve GNU Genel Kamu Lisansı versiyon 2 ile sunulan bir özgür yazılım projesidir.
        Linux ismi ilk geliştiricisi olan Linus Torvalds tarafından 1991 yılında verilmiştir.
      </p>
      <h1>1. Linux Komut Satırı</h1>

      <div className="webview">
        <iframe title="Linux Dersleri" src="https://www.linuxdersleri.net/docs/temel_linux/3.html" />
      </div>

      <h1>2. Linux Dosya Sistemi Hiyerarşisi</h1>

      <div className="webview">
        <iframe title="Linux Dersleri" src="https://www.linuxdersleri.net/docs/temel_linux/7.html" />
      </div>

      <h1>3. Linux İşlemler ve Servis Yönetimi</h1>

      <div className="webview">
        <iframe title="Linux Dersleri" src="https://www.linuxdersleri.net/docs/temel_linux/13.html" />
      </div>
    </div>
  );
}

export default Subject3;