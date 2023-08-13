

function Subject4() {
  return (
   <>
      <div>
      <h1>Python Programlama Temelleri</h1>
      <p>
        Bu bileşen, Python programlamaya başlarken temel kavramları anlamada yardımcı olmak için oluşturulmuştur. Python, anlaşılır ve okunabilir sözdizimi ile geniş kullanım alanına sahip bir programlama dilidir. İşte Python dünyasının temel konularına genel bir bakış:
      </p>

      <h2>Değişkenler ve Veri Türleri</h2>
      <p>
        Python'da verileri depolamak için değişkenler kullanılır. Değişkenler tanımlanırken veri türü belirtilmez, Python otomatik olarak türleri belirler.
      </p>
      <pre>
        <code>
          {`message = "Merhaba, Dünya!"
number = 42
pi = 3.14
is_true = True`}
        </code>
      </pre>

      <h2>Koşullar ve Döngüler</h2>
      <p>
        Koşullar ve döngüler, programların mantıksal işlemler yapmasını sağlar.
      </p>
      <pre>
        <code>
          {`if is_true:
  print("Doğru!")
else:
  print("Yanlış!")

for i in range(5):
  print(i)

while number > 0:
  print(number)
  number -= 1`}
        </code>
      </pre>

      <h2>Fonksiyonlar</h2>
      <p>
        Fonksiyonlar, tekrar kullanılabilir kod blokları oluşturmanıza olanak sağlar.
      </p>
      <pre>
        <code>
          {`def welcome(name):
  print("Merhaba, " + name)

welcome("Ahmet")
welcome("Ayşe")`}
        </code>
      </pre>

      <h2>Listeler ve Diziler</h2>
      <p>
        Listeler, birden çok değeri saklamak ve işlemek için kullanılır.
      </p>
      <pre>
        <code>
          {`fruits = ["elma", "armut", "muz"]
print(fruits[0])  # Çıktı: elma

numbers = [1, 2, 3, 4, 5]
sum_of_numbers = sum(numbers)
print(sum_of_numbers)  # Çıktı: 15`}
        </code>
      </pre>

      <h2>String Manipülasyonu</h2>
      <p>
        Stringler üzerinde işlemler yapmak için farklı yöntemler kullanılabilir.
      </p>
      <pre>
        <code>
          {`text = "Merhaba, Dünya!"
print(text.upper())  # Çıktı: MERHABA, DÜNYA!
print(text.replace("Dünya", "Python"))  # Çıktı: Merhaba, Python!`}
        </code>
      </pre>

      <h2>Sınıflar ve Nesneler</h2>
      <p>
        Nesne yönelimli programlamayı (OOP) anlamak için sınıflar ve nesneler önemlidir.
      </p>
      <pre>
        <code>
          {`class Dog:
  def __init__(self, name):
    self.name = name

  def bark(self):
    print(self.name + " havlıyor!")

dog1 = Dog("Fido")
dog1.bark()  # Çıktı: Fido havlıyor!`}
        </code>
      </pre>

      <h2>Modüller ve Kütüphaneler</h2>
      <p>
        Python'ın gücünü artırmak için modüller ve kütüphaneler kullanabilirsiniz.
      </p>
      <pre>
        <code>
          {`import math

radius = 5
area = math.pi * radius ** 2
print(area)  # Çıktı: 78.53981633974483`}
        </code>
      </pre>

      <h2>Hata Yakalama ve İstisnalar</h2>
      <p>
        Programlarınızda oluşabilecek hataları yönetmek için hata yakalama mekanizmalarını kullanabilirsiniz.
      </p>
      <pre>
        <code>
          {`try:
  result = 10 / 0
except ZeroDivisionError:
  print("Sıfıra bölme hatası")`}
        </code>
      </pre>

      <h2>Dosya İşlemleri</h2>
      <p>
        Dosyalarla çalışmak için Python'ın sunduğu yöntemleri kullanabilirsiniz.
      </p>
      <pre>
        <code>
          {`with open("dosya.txt", "r") as file:
  content = file.read()
  print(content)`}

{`# Dosya okuma
with open('dosya.txt', 'r') as f:
    content = f.read()
    print(content)`}
        </code>
      </pre>


      <h2>Fonksiyonel Programlama</h2>
      <p>
        Python, fonksiyonel programlama yaklaşımını da destekler. Fonksiyonları birinci sınıf nesneler olarak kullanarak işlemleri daha basit ve okunabilir hale getirebilirsiniz.
      </p>
      <pre>
        <code>
          {`def square(x):
  return x ** 2

numbers = [1, 2, 3, 4, 5]
squared_numbers = map(square, numbers)
print(list(squared_numbers))  # Çıktı: [1, 4, 9, 16, 25]`}
        </code>
      </pre>

      <h2>Çalışma Ortamları ve Sanal Ortamlar</h2>
      <p>
        Python projelerinizi yönetmek ve izole etmek için çalışma ortamları ve sanal ortamlar kullanabilirsiniz. Bu sayede farklı projeler için farklı bağımlılıklar oluşturabilirsiniz.
      </p>
      <pre>
        <code>
          {`# Sanal ortam oluşturma
python -m venv myenv

# Sanal ortamı etkinleştirme (Windows)
myenv\Scripts\activate

# Sanal ortamı etkinleştirme (Linux/Mac)
source myenv/bin/activate`}
        </code>
      </pre>

      <h2>Veritabanları ile Çalışma</h2>
      <p>
        Python, farklı veritabanlarına bağlanarak verileri depolamak ve çekmek için kullanılabilir. SQLite, MySQL, PostgreSQL gibi veritabanları ile entegrasyon sağlayabilirsiniz.
      </p>
      <pre>
        <code>
          {`import sqlite3

# Veritabanı bağlantısı
conn = sqlite3.connect('mydb.db')
cursor = conn.cursor()

# Tablo oluşturma
cursor.execute('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)')

# Veri ekleme
cursor.execute('INSERT INTO users (name) VALUES (?)', ('Ahmet',))
conn.commit()

# Veri çekme
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

# Bağlantıyı kapat
conn.close()`}
        </code>
      </pre>

      
      <h2>Web Scraping</h2>
      <p>
        Python, web sitelerinden veri çekmek için kullanılabilir. BeautifulSoup gibi kütüphanelerle web scraping işlemleri gerçekleştirebilirsiniz.
      </p>
      <pre>
        <code>
          {`import requests
from bs4 import BeautifulSoup

url = 'https://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

title = soup.find('title')
print(title.text)`}
        </code>
      </pre>

      <h2>Veri Analizi ve Görselleştirme</h2>
      <p>
        Python, pandas ve matplotlib gibi kütüphanelerle veri analizi ve görselleştirme işlemleri için kullanılabilir.
      </p>
      <pre>
        <code>
          {`import pandas as pd
import matplotlib.pyplot as plt

data = {
    'Ülke': ['Türkiye', 'ABD', 'Çin', 'Hindistan'],
    'Nüfus': [82000000, 331000000, 1400000000, 1360000000]
}

df = pd.DataFrame(data)
df.plot(x='Ülke', y='Nüfus', kind='bar')
plt.show()`}
        </code>
      </pre>

      <h2>Otomasyon ve Scripting</h2>
      <p>
        Python, tekrarlayan görevleri otomasyon ve script oluşturmak için kullanabilirsiniz.
      </p>
      <pre>
        <code>
          {`import os

files = os.listdir()
for file in files:
    if file.endswith('.txt'):
        os.rename(file, f'renamed_{file}')`}
        </code>
      </pre>

      <h2>Oyun Geliştirme</h2>
      <p>
        Python, Pygame gibi kütüphanelerle basit oyunlar geliştirmek için de kullanılabilir.
      </p>
      <pre>
        <code>
          {`import pygame

pygame.init()

win = pygame.display.set_mode((500, 500))
pygame.display.set_caption("Basit Oyun")

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    win.fill((255, 255, 255))
    pygame.display.update()

pygame.quit()`}
        </code>
      </pre>


      <h2>Veri Bilimi ve Makine Öğrenmesi</h2>
      <p>
        Python, veri analizi ve model oluşturmak için kullanılır. Scikit-learn ve TensorFlow gibi kütüphanelerle makine öğrenmesi projeleri geliştirebilirsiniz.
      </p>
      <pre>
        <code>
          {`import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

data = np.random.rand(100, 1)
target = 2 * data + 1 + np.random.randn(100, 1)

X_train, X_test, y_train, y_test = train_test_split(data, target, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)

score = model.score(X_test, y_test)
print("Model R^2 Score:", score)`}
        </code>
      </pre>

      <h2>Web Geliştirme</h2>
      <p>
        Python, Django ve Flask gibi web framework'leri ile web uygulamaları geliştirmek için kullanılabilir.
      </p>
      <pre>
        <code>
          {`from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Merhaba, Flask!'

if __name__ == '__main__':
    app.run()`}
        </code>
      </pre>

      <h2>Veri Görselleştirme</h2>
      <p>
        Python, seaborn ve plotly gibi kütüphanelerle verileri çeşitli grafiklerle görselleştirebilirsiniz.
      </p>
      <pre>
        <code>
          {`import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset('tips')
sns.scatterplot(data=data, x='total_bill', y='tip', hue='sex')
plt.show()`}
        </code>
      </pre>

      {/* Daha fazla konu ve örnek kodlar burada olabilir */}
    </div>
   </>
  )
}

export default Subject4