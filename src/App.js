import logo from './dk3.png';
import avatar from './avatar.png';
import './App.css';
import './new.js';


function App() {
  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

   <nav className='navbar'>
        
    <a href="#">Anasayfa</a>
   
    <a href="#about">Hakkında</a>
    <a href="#portfolio">Portfolyo</a>
    <a href="#contact">İletişim</a>
  </nav>
      <header className="App-header" id='about'>
      <div className='title-box'> 

      <h1 className='title' id='title'>HAKKIMDA </h1>
      <hr></hr>


      </div>
   
      <div class="container">
    <div class="avatar">
      <img src={avatar} width={500} alt="Your Avatar"/>
    </div>
    <div class="about">
    <h2 className='name'>DAMLA KARAYEL | Grafik Tasarımcı </h2>
      <p className='tanitim'>
      22 yaşındayım. Ankara`da yasamaktayım. Akdeniz Üniversitesi Grafik Tasarım mezunuyum. Eğitim hayatımın başından beri
      temsil ettiğim firmalara, tasarım konulu kurumsal çözümler sunmakta ve danışmanlık yapmaktayım.
      </p>
    </div>
  </div>   
    
      <h2>  </h2>
      
      <p className='about-text-two' id='abt-txt-2'>2020`den günümüze dek sektörlerin önde gelen kuruluşlarına hizmet vermekteyim.  
      Freelancer olarak tasarımcılık
       görevimi sürdürmekteyim. Hedefim, yenilikçi, kalite odaklı ve profesyonel bir hizmet sunmak, doğru stratejiler geliştirerek
        hedef kitlelere
        ulaşmak ve vazgeçilmez bir çözüm ortağınız olarak yüksek kalite müşteri memnuniyeti sağlamaktır. 

        <br></br>
        <br></br>
          Sorumluluklarım, gelişen teknolojiye uyumlu, fark yaratan, firma vizyonunuza değer katan çalışmaları zamanı 
      etkin kullanarak beğeninize sunmaktır.
</p>


  <div class="containertwo">
    <div className='box'> 

     <h2 className='title' id='ytnk' >YETENEKLERİM </h2>
        <hr></hr>


       </div>
      <h3>ILLUSTRATOR</h3>
            <div class="progress progress-infinite" >
             
                <div class="progress-bar3 illustrator"  >
               </div>
           </div>
           <h3>PHOTOSHOP</h3>
         <div class="progress progress-infinite">

             <div class="progress-bar3 PHOTOSHOP">
             </div>
         </div>
         <h3>COREL DRAW</h3>
         <div class="progress progress-infinite">

             <div class="progress-bar3 corel">
             </div>
         </div>
         <h3>AFTER EFFECT</h3>
         <div class="progress progress-infinite">

             <div class="progress-bar3 effect">
             </div>
         </div>
         <h3>PREMIERE</h3>
         <div class="progress progress-infinite">

             <div class="progress-bar3 premiere">
             </div>
         </div>
         <h3>IN DESIGN</h3>
         <div class="progress progress-infinite">

             <div class="progress-bar3 design">
             </div>
         </div>
         <h3>ANIMATE</h3>
         <div class="progress progress-infinite">

             <div class="progress-bar3 animate">
             </div>
         </div>
   </div>
   
    
      </header>
   
  


      <div className="contact" id='contact' >
      <div className='title-box'> 

      <h1 className='title' id='title'>İLETİŞİM </h1>
      <hr></hr>


      </div>
    
      <h2 id='contact-text'> Tasarım ve reklam işleriniz için whatsapp üzerinden iletişime geçebilirsiniz.</h2>
      <a class="whatsapp-link" href="https://wa.me/5541662011" target="_blank" rel="noopener noreferrer">WhatsApp Hattı</a>


      </div>


      <footer>
    <div class="footer-content">
      <p className='footer-title'>&copy; 2023 KARAYEL DESIGN </p>
      <p className='footer-title'> Made with ♥ by <a href='https://fairydevmother.github.io/portfolio/'>Sema KARACA </a>  </p>
      
      <div class="social-icons">
       
      </div>
    </div>
  </footer>




    </div>
  );
}

export default App;
