import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>



      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h1 style={{ color: 'red' }}>QUYTECH</h1>
        </div>
        <div>
          <button type='button' class="btn  dropdown-toggle dropdown-toggle-split">Home</button>
          <button type='button' class="btn  dropdown-toggle dropdown-toggle-split">About</button>
          <button type='button' class="btn  dropdown-toggle dropdown-toggle-split">Services</button>
          <button type='button' class="btn  dropdown-toggle dropdown-toggle-split">Solution</button>
          <button type='button' class="btn  dropdown-toggle dropdown-toggle-split">Portfolio</button>
          <button type='button' class="btn  dropdown-toggle dropdown-toggle-split">Clients</button>
          <button type='button' class="btn  dropdown-toggle dropdown-toggle-split">Blog</button>
        </div>
        <div>
        </div>
        <img style={{ marginLeft: '80px' }} src='https://i.pinimg.com/originals/7e/21/b9/7e21b9661c85d61676143a8ae2c9a73b.jpg' height="40px" width="40px" />
        <button style={{ backgroundColor: 'red', borderRadius: '20px', height: '40px', width: '150px', color: 'white', border: 'none' }}>Contact Us</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ marginTop: '100px', marginLeft: '40px' }}>
          <h4>Mobile Apps powered by AI, AR, VR, Blockchain</h4>
          <h1 style={{
            fontSize:
              '60px', marginBottom: '40px', marginTop: '40px'
          }}>Where Innovation
            Meets Reliability </h1>
          <button style={{ height: '40px' }} type="button" class="btn btn-outline-dark">EXPLORE WORK</button>
          <button style={{ backgroundColor: 'red', marginLeft: '20px', border: 'none', color: 'white', height: '40px', width: '150px', borderRadius: '5px' }}>CONTACT US</button>
        </div>
        <div>
          <img style={{ marginTop: '30px' }} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlxJ9lvbsNNKpsYOj3PW6Vp0mogjRMh2xnREFeow5-xeth16Ub' height='600px' width='600px' />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '60px', marginTop: '100px' }}>
        <div style={{ marginLeft: '60px', marginRight: '40px' }}>
          <h5 style={{ color: 'red' }}>TRANSFORM YOUR IDEAS INTO REALITY</h5>
          <h1 style={{ marginTop: '40px', marginBottom: '40px' }}>Top Mobile App
            Development Company</h1>
          <p style={{ marginBottom: '40px' }}>We are recognised globally as one of the Top Mobile App Development Company. We provide custom app development services for Android, iOS, Artificial Intelligence, Blockchain, Gaming & AR/VR.</p>

          <button type="button" class="btn btn-outline-dark">ABOUT COMPANY</button>
        </div>



        <div>
          <img style={{ borderRadius: '20px' }} src='https://img.freepik.com/free-photo/high-angle-desk-assortment-with-laptop_23-2149013922.jpg'
            height="200px" width="300px" />
          <div>
            <p>We provide mobile app development services to help you transform your startup idea into a reality.

            </p>
          </div>
        </div>



        <div>
          <img style={{ borderRadius: '20px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDQTytcjytotnGNSRnIyQ1nNbHyugcumZYQ&usqp=CAU'
            height="200px" width="300px" />
          <div>
            <p>We help enterprises to redefine the scope of enterprises in various verticals in this ever-growing demand for mobile applications.

            </p>
          </div>
        </div>
      </div>


      <h2 style={{ color: 'red', marginTop: '90px', textAlign: 'center', marginTop: '100px' }}>OUR SERVICES</h2>

      <div style={{}}>
        <div style={{ display: 'flex',justifyContent:'space-around',gap:'100px' }}>
          <div style={{ marginLeft: '50px' }}>
            <i class="icon d-block sprt mobile-dev"></i>
            <h3>Mobile App Development</h3>
            <p>We help growing startups and established businesses develop customized mobile applications. Our mobile app developers have extensive experience developing Android and iPhone apps and have developed mobile apps for multiple industries.</p>
          </div>

          <div>
            <h3>IT staff Augmentation</h3>
            <p>We strive hard to deliver top-class IT staff augmentation services to provide our clients competitive advantage in the market. At Quytech, we help you quickly speed up your development project with our pre-vetted, ready-to-deploy developers.</p>
          </div>

          <div style={{ marginRight: '50px' }}>
            <h3>Artificial Intelligence Development Company in India & USA
            </h3>
            <p>Quytech offers the best AI development services as per the client requirements. We are experienced in AI development, Natural language processing, computer vision & deep learning to create high performance app.

            </p>
          </div>
        </div>


        <div style={{ display: 'flex',justifyContent:'space-around',gap:'160px'  }}>
          <div style={{ marginLeft: '50px' }}>
            <h3>Game Devlopment Sevices</h3>
            <p>We focus on pushing the boundaries of your imagination. Utilizing Unity and Unreal game engine we follow creative designing and technically advance game development strategies. We develop futuristic games that can transform your game idea into reality.</p>
          </div>

          <div>
            <h3>AR/VR & Metaverse Devlopment</h3>
            <p> <div>
              <h3>Game Devlopment Sevices</h3>
              <p>We focus on pushing the boundaries of your imagination. Utilizing Unity and Unreal game engine we follow creative designing and technically advance game development strategies. We develop futuristic games that can transform your game idea into reality.</p>
            </div>
            </p>
          </div>

          <div style={{ marginRight: '50px' }}>
            <h3>Blockchainchain Devlopment</h3>
            <p>Our skillful developers opt advance blockchain methodologies to gain a competitive edge in the market place. We have a good understanding of developing decentralized solutions such as Ethereum/ Cryptocurrency, Hyperledger, Smart Contracts Development, and many others.</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px', backgroundColor: 'black', color: 'white', padding: '60px', marginBottom: '100px' }}>
        <div>
          <h1>1000+</h1>
          <h4>project delivered</h4>
        </div>

        <div>
          <h1>200+</h1>
          <h4>DEVELOPMENT STAFF</h4>
        </div>

        <div>
          <h1>12+</h1>
          <h4>YEARS OF EXISTENCE</h4>
        </div>

        <div>
          <h1>500+</h1>
          <h4>SATISFIED CLIENTS</h4>
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '80px' }}>Take a Look at
          Case Studies of Our Chosen Work
        </h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '90px' }}>
        <div style={{ marginRight: '50px', marginLeft: '50px' }}>
          <img src='https://ik.imagekit.io/eytazlfr68/assets/images/portfolio/1/mobile-app/myswimpro.webp' height='500px' width="500px" />
        </div>

        <div style={{ marginRight: '50px' }}>
          <h2>MySwimPro</h2>
          <h4 style={{ marginTop: "30px", marginBottom: '30px' }}>Meet Your New Swim Coach</h4>
          <p>The swim workout app empowers professional and non-professional swimmers to reach their health and performance goals. The app allows you to track all your data and learn from the performance, suggesting faster intervals so that you always push yourself towards improvement. It has multiple features including personalizing your swimming speed &amp; goal, building custom open-water workouts, tracking total distance swim, and more. Check out the detailed case study to know more about the app.</p>


          <button type="button" class="btn btn-outline-dark">CASE STUDY</button>
          <button style={{ backgroundColor: 'black', marginLeft: '20px', border: 'none', color: 'white', height: '40px', width: '150px', borderRadius: '5px' }}>CONTACT US</button>
        </div>
      </div>

      <h2 style={{ marginTop: '100px', textAlign: 'center', marginBottom: '90px' }}>Client Testimonials
      </h2>

      <div style={{ display: 'flex', gap: '90px' }}>

        <div style={{ backgroundColor: 'white', padding: '30px' }}>
          <p>Encouraged by the team’s flexibility, Quytech produced a platform that satisfied stakeholders. The team is not only responsive to changes in requirements but also accessible.</p>
          <h5>Robbin Yin</h5>
        </div>
        <div>
          <img style={{ marginRight: '80px' }} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQOwd_w6e3VuIJvpj16xPYCa_AnqjQfeCSGVmCs4wMeT-43_FY" height="330px" width="300px" />
        </div>
      </div>

      <div style={{ display: "flex", gap: '50px', marginTop: '100px' }}>
        <div style={{ marginLeft: '50px', marginRight: '50px' }}>
          <h3>Awards & Recognition</h3>
          <p>Quytech has been recognized and awarded from time to time for achievements.
            Here's a glimpse into our accomplishments.</p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsKGwlq2ZmzZI2D-vUS5bFZItsi6P0MRPdEwEVYQ7-q-d6gXAa"
              height="150px" width="150px" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOGjNsPhCwU9uFiog0eKHXEBG_m6m5qukl0EKBnVW3fAznq45"
              height="150px" width="150px" />
          </div>

          <div>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUcFheJdg_OnTHzulzLIjt-bncr4fGAlqvbgY2dcu8M_H02LSK"
              height="150px" width="150px" />
          </div>
          <div>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrlyl2MFyF-bAdiv14ByouRzE-voWv0ouKeOvAoBidxQUD7dS6"
              height="150px" width="150px" />
          </div>
          <div>
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgx6Ol4OH9TwzxpMVi_IvO9nBLt6UlNvhsE8vnYQcViDPAUjwJ"
              height="150px" width="150px" />
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '200px', marginBottom: '200px' }}> Our Clients</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>

          <img style={{ marginLeft: '90px' }} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXWXNVIPCWuvNWReoG00FjP99xQT_oHtz9oe7iGBIEzhyN1Cg1"
            height="150px" width="150px" />
        </div>
        <div>
          <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQH0vWlQoCvDiG8OlJJzbRUqMDJES5AnkxRsHEGuUm5tt8KWhfN'
            height="150px" width="150px" />
        </div>
        <div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0Dx83UqnvrN2tweNb1eRAWlKpaJ1Bq5UHX8xQ1XY2He35LLgZ"
            height="100px" width="150px" />
        </div>
        <div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUsHXSWj9-behqnUkHO5m7zlIIh4XAFuKKE0XJQ6-MHMJBEsYt"
            height="50px" width="150px" />
        </div>
        <div>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5g1wx2M6FlUB5ib0aZ2RvVZx4YjFpL39-Lh68l-9zYWOuxOfL"
            height="100px" width="100px" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5FndA-OplSP_yL3XygqvDWp45G6h3_qlusaF7JxAsaFROffl"
            height="150px" width="150px" />
        </div>
      </div>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
        <h4 style={{ textAlign: 'center', marginTop: '100px' }}>Contact Us</h4>
        <p style={{ textAlign: 'center' }}>WE ASSURE YOU TO REVERT WITHIN ONE BUSINESS DAY</p>
        <div style={{ display: 'flex', gap: '50px' }}>
          <div style={{ marginLeft: '80px' }}>

            <h2 style={{ marginTop: '100px' }}>Let's plan for a new project!</h2>
            <p>We understand your project perspective to convert your amazing ideas into reality. Usher your business into a futuristic realm with our high-quality development services.</p>


            <h3 style={{ marginTop: '30px' }}>Reach Us</h3>

            <div style={{ display: 'flex' }}>
              <img style={{ borderRadius: '30px' }} src="https://c4.wallpaperflare.com/wallpaper/264/668/10/australia-flag-wallpaper-preview.jpg" height="40px" width="40px" />
              <p style={{ marginTop: '10px' }}>+1-213 493 2650</p>
            </div>

            <div style={{ display: 'flex' }}>
              <img style={{ borderRadius: '30px' }} src=" https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" height="40px" width="40px">
              </img><p style={{ marginTop: '10px' }}>+44-208 089 4430</p>
            </div>

            <div style={{ display: 'flex' }}>
              <img style={{ borderRadius: '30px' }} src=" https://m.media-amazon.com/images/I/514yJngiHpL._AC_UF894,1000_QL80_.jpg" height="40px" width="40px">
              </img><p style={{ marginTop: '10px' }}>+44-208 089 4430</p>
            </div>

            <div style={{ display: 'flex' }}>
              <img style={{ borderRadius: '30px' }} src=" data:image/jpeg;base64,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" height="40px" width="40px">
              </img><p style={{ marginTop: '10px' }}>info@quytech.com</p>
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '90px', backgroundColor: 'white', color: 'black', marginRight: '60px', borderRadius: '20px' }}>
            <h2 >Request for a Quote</h2>

            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px', marginTop: '30px' }}>
              <div>
                <input style={{ borderRadius: '5px', height: '40px', width: "250px" }} type="text" id="name" name="name" placeholder="NAME*" />
              </div>
              <div>
                <input style={{ borderRadius: '5px', height: '40px', width: "250px" }} type="email" id="mail" nmae="mail" placeholder="E-mail*" />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
              <div>
                <input style={{ borderRadius: '5px', height: '40px', width: "250px" }} type="text" id="name" name="name" placeholder="skype or phone No.*" />
              </div>
              <div>
                <input style={{ borderRadius: '5px', height: '40px', width: "250px" }} type="text" id="text" nmae="text" placeholder="Subject**" />
              </div>
            </div>

            <div>
              <textarea id="w3review" name="w3review" rows="4" cols="70" placeholder="message*"></textarea>
            </div>
          </div>
        </div >
      </div>

      <div style={{ display: 'flex', gap: '40px', marginTop: '100px' }}>
        <div style={{ marginLeft: '50px' }}>
          <h1 style={{ fontSize: '30PX' }}>QUYTECH</h1>
          <h5>INNOVATION MEETS RELIABILITY</h5>
          <p>Quytech leverages the latest technologies like Game, Blockchain, AI/ML, AR/VR and App Development for clients to get the best outcome for their budget. If you are searching for a globally trusted solution partner. We are here!</p>
        </div>

        <div>
          <h4>INDIA</h4>
          <p>Quy Technology Pvt. Ltd,
            Plot No 657, Udhyog Vihar Phase 5, Gurgaon (Delhi NCR) Haryana,
            India - 122016
            +91-704 229 5974</p>
          <p>Mon-Fri: 10am-7pm</p>
          <p>+91-124 436 5180</p>
          <p>info@quytech.com</p>
        </div>

        <div>
          <h4>CALIFORNIA</h4>
          <p>340 S Lemon Ave #5254
            Walnut, CA 91789, USA</p>
          <p>+1-213 493 2650</p>
          <div>
            <h4>NEW YORK</h4>
            <p>188 Grand Street
              Unit #212 New York, NY 10013</p>
            <p>+1-213 493 2650</p>
          </div>
        </div>

        <div style={{ marginRight: "50px" }}>
          <h4>APPS EXPERTISE</h4>
          <p>Artificial Intelligence
            Chatbot Development
            Augmented Reality
            Unity Game Development
            Blockchain Development
            Enterprise Mobility solutions</p>
          <div>
            <h4>RESOURCES</h4>
            <p>Sitemap | Contact Us</p>
          </div>
        </div>
      </div>

    </>


  );
}

export default App;
