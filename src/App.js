import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import './App.css';
import melisPhoto from './melis(2).jpeg';

// Proje resimleri
import proje1 from './proje1.png';
import proje2 from './proje2.png';
import proje3 from './proje3.png';
import proje4 from './proje4.png';
import proje5 from './proje5.png';
import notDefteriImg from './proje(notdefteri).png';

// Yeni Soru Bankası resimleri
import soruBankasi1 from './sorubankasi1.png';
import soruBankasi2 from './sorubankasi2.png';
import soruBankasi3 from './sorubankasi3.png';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function Home() {
  return (
      <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <h2>Ana Sayfa</h2>
        <p>Hoş geldin! Kişisel portföyüme adım attığın için teşekkürler. Burada projelerimi, yeteneklerimi ve yaptığım işleri keşfedebilirsin. Menüden istediğin bölüme tıklayarak daha fazla bilgi alabilirsin. Keyifli gezmeler!</p>
      </motion.div>
  );
}

function About() {
  return (
      <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <h2>Ben Kimim?</h2>
        <p>Merhaba! Ben Melis Gülin Turgut, Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Yazılım geliştirmeye ve yeni teknolojiler öğrenmeye tutkuluyum. Özellikle React ile web uygulamaları, Python & PyQt5 ile masaüstü projeler ve C# ile uygulamalar geliştirmeye odaklanıyorum. Analitik düşünme yeteneğim ve problem çözme becerimle, kullanıcı dostu ve işlevsel yazılımlar ortaya çıkarmayı hedefliyorum.</p>
      </motion.div>
  );
}

function Skills() {
  return (
      <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <h2>Neler Yapabilirim?</h2>
        <ul>
          <li>Python ve PyQt5 kullanarak masaüstü uygulamaları yaparım.</li>
          <li>React ile şık ve hızlı web arayüzleri tasarlayıp geliştirebilirim.</li>
          <li>SQLite gibi veritabanları ile veri yönetimi yapabilirim.</li>
          <li>C# ile basit komut satırı programları yazabilirim.</li>
        </ul>
      </motion.div>
  );
}

function Portfolio() {
  // Görseller dizileri
  const ogrNotKayitGorseller = [proje1, proje2, proje3, proje4, proje5];
  const soruBankasiGorseller = [soruBankasi1, soruBankasi2, soruBankasi3];

  // Detay gösterme durumu
  const [showDetails, setShowDetails] = React.useState({
    ogrNotKayit: false,
    notDefteri: false,
    soruBankasi: false,
  });

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxImages, setLightboxImages] = React.useState([]);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const toggleDetails = (project) => {
    setShowDetails(prev => {
      const newState = { ogrNotKayit: false, notDefteri: false, soruBankasi: false };
      newState[project] = !prev[project];
      return newState;
    });
  };

  const openLightbox = (images, index) => {
    // Lightbox için images arrayi şu şekilde olmalı: [{src: 'url'}, {src: 'url2'}]
    const formattedImages = images.map(img => ({ src: img }));
    setLightboxImages(formattedImages);
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
      <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <h2>Portfolyo</h2>

        {/* Öğrenci Not Kayıt Sistemi */}
        {!showDetails.ogrNotKayit ? (
            <div className="project-card" onClick={() => toggleDetails('ogrNotKayit')} style={{cursor: "pointer"}}>
              <h3>Öğrenci Not Kayıt Sistemi</h3>
              <p>PyQt5 ve SQLite kullanarak geliştirdiğim bir not kayıt uygulaması.</p>
            </div>
        ) : (
            <div className="project-details">
              <button className="back-btn" onClick={() => toggleDetails('ogrNotKayit')}>← Geri</button>
              <h3>Öğrenci Not Kayıt Sistemi</h3>
              <p>Öğrencilerin isim, not ve ders bilgilerini tutan, kayıt, filtreleme, sıralama, arama, silme ve ders bazında not ortalaması hesaplama işlemleri yapabilen bir masaüstü programdır.</p>
              <div className="project-images">
                {ogrNotKayitGorseller.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Proje Görsel ${i + 1}`}
                        className="project-image"
                        onClick={() => openLightbox(ogrNotKayitGorseller, i)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
              </div>
            </div>
        )}

        {/* Not Defteri Uygulaması */}
        {!showDetails.notDefteri ? (
            <div className="project-card" onClick={() => toggleDetails('notDefteri')} style={{cursor: "pointer"}}>
              <h3>Not Defteri Uygulaması</h3>
              <p>Python ve PyQt5 ile yapılmış basit not defteri uygulaması.</p>
            </div>
        ) : (
            <div className="project-details">
              <button className="back-btn" onClick={() => toggleDetails('notDefteri')}>← Geri</button>
              <h3>Not Defteri Uygulaması</h3>
              <p>Metin dosyaları oluşturabilir, açabilir, düzenleyebilir ve kaydedebilirsiniz.</p>
              <div className="project-images">
                <img
                    src={notDefteriImg}
                    alt="Not Defteri Uygulaması"
                    className="project-image"
                    onClick={() => openLightbox([notDefteriImg], 0)}
                    style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
        )}

        {/* Soru Bankası Yönetimi */}
        {!showDetails.soruBankasi ? (
            <div className="project-card" onClick={() => toggleDetails('soruBankasi')} style={{cursor: "pointer"}}>
              <h3>Soru Bankası Yönetimi</h3>
              <p>Python ve PyQt5 ile SQLite kullanan soru bankası uygulaması.</p>
            </div>
        ) : (
            <div className="project-details">
              <button className="back-btn" onClick={() => toggleDetails('soruBankasi')}>← Geri</button>
              <h3>Soru Bankası Yönetimi</h3>
              <p>Öğretmenler için soru bankası oluşturma ve yönetme uygulaması.</p>
              <ul>
                <li>Yeni Soru Ekleme</li>
                <li>Veritabanına Kayıt</li>
                <li>Soru Listesi Görüntüleme</li>
                <li>Soru Seçme ve Yazdırma</li>
              </ul>
              <div className="project-images">
                {soruBankasiGorseller.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Soru Bankası Görsel ${i + 1}`}
                        className="project-image"
                        onClick={() => openLightbox(soruBankasiGorseller, i)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
              </div>
            </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxImages}
                index={photoIndex}
                onIndexChange={setPhotoIndex}
            />
        )}
      </motion.div>
  );
}

function Contact() {
  return (
      <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <h2>İletişim</h2>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Mesajınız gönderildi!'); }}>
          <label>Ad Soyad:</label>
          <input type="text" required />
          <label>Mail:</label>
          <input type="email" required />
          <label>İçerik:</label>
          <textarea rows="4" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
      <>
        <header>
          <img src={melisPhoto} alt="Melis Gülin Turgut" className="profile-photo" />
          <h1>Melis Gülin Turgut</h1>
          <nav>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/about">Ben Kimim?</Link></li>
              <li><Link to="/skills">Neler Yapabilirim?</Link></li>
              <li><Link to="/portfolio">Portfolyo</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer>
          <p>© 2025 Melis Gülin Turgut - Tüm Hakları Saklıdır</p>
        </footer>
      </>
  );
}

export default function WrappedApp() {
  return (
      <Router>
        <App />
      </Router>
  );
}
