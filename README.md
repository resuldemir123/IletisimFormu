
# 🎓 Staj Başvuru Formu Uygulaması

Bu proje, ASP.NET Core MVC teknolojisi ile geliştirilmiş bir **staj başvuru formu yönetim sistemidir**. Adayların online olarak başvuru yapmasını, yöneticilerin ise bu başvuruları görüntüleyip değerlendirmesini sağlar.

## 🚀 Proje Özellikleri

- 📄 Adayların staj başvuru formunu doldurabileceği kullanıcı arayüzü
- 🗂️ Başvuruların listelenmesi ve detay görüntüleme paneli (Admin Paneli)
- 🧩 Entity Framework Core kullanılarak veritabanı işlemleri
- ✅ Validasyon ve hata yönetimi
- 🛠️ Katmanlı mimari (MVC)

## 🧱 Kullanılan Teknolojiler

- ASP.NET Core MVC
- Entity Framework Core
- C#
- Razor View Engine
- SQL Server

## 📁 Proje Yapısı

```
StajBasvuruFormu/
│
├── Controllers/             → Admin, Başvuru ve Ana Sayfa kontrolleri
├── Models/                  → Veri modelleri (BaşvuruFormu.cs, ErrorViewModel.cs)
├── Data/                    → ApplicationDbContext (veritabanı işlemleri)
├── Views/                   → Razor tabanlı kullanıcı arayüzü
│   ├── Admin/               → Admin paneli görünümleri
│   └── Basvuru/             → Başvuru formu görünümü
├── Migrations/              → Veritabanı geçiş dosyaları
├── appsettings.json         → Uygulama yapılandırma dosyası
├── Program.cs               → Uygulama başlangıç noktası
└── StajBasvuruFormu.csproj  → Proje tanım dosyası
```

## 🔧 Kurulum ve Çalıştırma

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/kullaniciadi/StajBasvuruFormu.git
   cd StajBasvuruFormu
   ```

2. **Gerekli NuGet paketlerini yükleyin:**
   Visual Studio'da `Tools > NuGet Package Manager > Manage NuGet Packages` üzerinden eksik paketleri yükleyin.

3. **Veritabanını oluşturun:**
   Paket yöneticisi konsolunda:
   ```bash
   Update-Database
   ```

4. **Projeyi başlatın:**
   `Ctrl + F5` ile Visual Studio'da çalıştırabilirsiniz.



## 🛡️ Güvenlik ve Validasyon

- Kullanıcı girişleri sunucu tarafında doğrulanır.
- Model validasyonları uygulanmıştır.
- SQL Injection'a karşı EF Core ile güvenli sorgular kullanılmıştır.

## 👨‍💻 Geliştirici

**Resul Demir**  
📧 E-posta: mail@example.com  
🌐 GitHub: [github.com/resuldemir](https://github.com/resuldemir123)

---
