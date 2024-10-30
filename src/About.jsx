// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(/images/bgimage.jpg)`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 0px',
        }}
      >
        {/* Logo Section */}
        <div
          className="logo"
          style={{
            width: '300px',
            height: '100%',
            background: 'rgb(4, 4, 131)',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            clipPath: 'polygon(0 0, 100% 0, 64% 100%, 0% 100%)',
            padding: '10px',
            fontWeight: '600',
            fontSize: '1.3rem',
          }}
        >
          <p>🎮 The Game Zone</p>
        </div>

        {/* Navigation Links */}
        <ul className="navbar" style={{ display: 'flex', listStyle: 'none', gap: '20px', width: '120px' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '20px' }}>Landing</Link></li>
          <li><Link to="/home" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '20px' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '20px' }}>About</Link></li>
          <li><Link to="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '20px' }}>Contact</Link></li>
        </ul>

        {/* Play Now Button */}
        <button
          type="button"
          id="btn"
          style={{
            width: '250px',
            height: '10vh',
            paddingRight: '40px',
            color: 'white',
            outline: 'none',
            border: 'none',
            clipPath: 'polygon(35% 0,100% 0,100% 100%,0 100%)',
            fontSize: '1.2rem',
            textAlign: 'right',
            background: 'rgb(222, 10, 141)',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          <i className="fas fa-play" style={{ color: 'white' }}></i> Play Now
        </button>
      </div>

      {/* About Content */}
      <div style={{background:'url(./images/bgimage3.jpg)',width:'900px',height:'500px',marginLeft:'300px',marginTop:'70px',backgroundRepeat:'no-repeat',backgroundSize:'cover',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{background:'url(./images/back.png)',width:'1500px',height:'700px',marginLeft:'-50px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <h1 style={{color:'white',marginTop:'160px',textAlign:'center',fontFamily: "'Dancing Script', serif",marginLeft:'20px'}}>Know More</h1>
            <p style={{color:'white',lineHeight:'30px',fontSize:'20px',fontFamily: "'Dancing Script', serif",marginLeft:'100px'}}>Explore an extensive library <br />of games in our game store app, <br /> designed to provide an intuitive <br /> and enjoyable browsing experience. <br /> With personalized recommendations <br /> tailored to your preferences, easy <br /> navigation, and exclusive deals, <br /> you can quickly find and <br /> download your next favorite title. <br />Experience gaming like never <br /> before, all in one convenient place!</p>
        </div>
        <div style={{display:'flex'}}>
          <img style={{width:'250px',height:'620px',marginTop:'-85px'}} src="./images/char1.png" alt="" />
          <img style={{width:'220px',height:'590px',marginTop:'-65px',marginLeft:'-70px'}}  src="./images/char2.png" alt="" />
          <img style={{width:'220px',height:'590px',marginLeft:'-60px',marginTop:'-65px'}} src="./images/char3.png" alt="" />
        </div>
        
      </div>
      <div style={{background:'url(./images/bgimage2.jpg)',width:'100vw',height:'150vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',marginTop:'50px'}}>
          <h1 style={{color:'white',marginLeft:'30px',marginTop:'50px'}}>Player List <span style={{fontSize:'15px',color:' rgb(225, 17, 166)'}}>(2134) Players</span></h1>
          <div style={{display:'flex',alignItems:'center',marginTop:'10px',justifyContent:'space-between',background:'url(./images/bgimage3.jpg)',height:'100px',width:'90vw',marginLeft:'40px',borderRadius:'10px'}}>
            <img style={{width:'130px',marginLeft:'10px',borderRadius:'10px',height:'80px'}} src="./images/per1.jpg" alt="" />
            <div>
              <h5 style={{color:'white'}}>Player Name</h5>
              <h2  style={{color:'white'}}>Alexander</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Nick Name</h5>
              <h2  style={{color:'white'}}>Alex</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Game Decipline</h5>
              <h2  style={{color:'white'}}>Dota 2</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Overall Game Rating</h5>
              <h2  style={{color:'white'}}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h2>
            </div>
            <div style={{background:'pink',width:'100px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-user"></i> Profile</h3>
            </div>
            <div style={{background:'pink',width:'125px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-crown"></i> Compare</h3>
            </div>
            <div style={{background:'pink',width:'40px',height:'40px',borderRadius:'10px',marginRight:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fas fa-bookmark"></i> </h3>
            </div>

          </div>

          <div style={{display:'flex',alignItems:'center',marginTop:'10px',justifyContent:'space-between',background:'url(./images/bgimage3.jpg)',height:'100px',width:'90vw',marginLeft:'40px',borderRadius:'10px'}}>
            <img style={{width:'130px',marginLeft:'10px',borderRadius:'10px',height:'80px'}} src="./images/per2.jpg" alt="" />
            <div>
              <h5 style={{color:'white'}}>Player Name</h5>
              <h2  style={{color:'white'}}>Jonathan </h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Nick Name</h5>
              <h2  style={{color:'white'}}>Jon</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Game Decipline</h5>
              <h2  style={{color:'white'}}>CS Go</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Overall Game Rating</h5>
              <h2  style={{color:'white'}}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></h2>
            </div>
            <div style={{background:'pink',width:'100px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-user"></i> Profile</h3>
            </div>
            <div style={{background:'pink',width:'125px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-crown"></i> Compare</h3>
            </div>
            <div style={{background:'pink',width:'40px',height:'40px',borderRadius:'10px',marginRight:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fas fa-bookmark"></i> </h3>
            </div>

          </div>

          <div style={{display:'flex',alignItems:'center',marginTop:'10px',justifyContent:'space-between',background:'url(./images/bgimage3.jpg)',height:'100px',width:'90vw',marginLeft:'40px',borderRadius:'10px'}}>
            <img style={{width:'130px',marginLeft:'10px',borderRadius:'10px',height:'80px'}} src="./images/per3.webp" alt="" />
            <div>
              <h5 style={{color:'white'}}>Player Name</h5>
              <h2  style={{color:'white'}}>Harrison</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Nick Name</h5>
              <h2  style={{color:'white'}}>Harry</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Game Decipline</h5>
              <h2  style={{color:'white'}}>Dota 2</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Overall Game Rating</h5>
              <h2  style={{color:'white'}}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h2>
            </div>
            <div style={{background:'pink',width:'100px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-user"></i> Profile</h3>
            </div>
            <div style={{background:'pink',width:'125px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-crown"></i> Compare</h3>
            </div>
            <div style={{background:'pink',width:'40px',height:'40px',borderRadius:'10px',marginRight:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fas fa-bookmark"></i> </h3>
            </div>

          </div>

          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'url(./images/bgimage3.jpg)',height:'100px',width:'90vw',marginLeft:'40px',borderRadius:'10px',marginTop:'10px'}}>
            <img style={{width:'130px',marginLeft:'10px',borderRadius:'10px',height:'80px'}} src="./images/per4.webp" alt="" />
            <div>
              <h5 style={{color:'white'}}>Player Name</h5>
              <h2  style={{color:'white'}}>William</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Nick Name</h5>
              <h2  style={{color:'white'}}>Willy</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Game Decipline</h5>
              <h2  style={{color:'white'}}>CS Go</h2>
            </div>
            <div>
              <h5 style={{color:'white'}}>Overall Game Rating</h5>
              <h2  style={{color:'white'}}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></h2>
            </div>
            <div style={{background:'pink',width:'100px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-user"></i> Profile</h3>
            </div>
            <div style={{background:'pink',width:'125px',height:'50px',borderRadius:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fa-solid fa-crown"></i> Compare</h3>
            </div>
            <div style={{background:'pink',width:'40px',height:'40px',borderRadius:'10px',marginRight:'10px',cursor:'pointer'}}>
              <h3 style={{color:'white',padding:'10px'}}><i class="fas fa-bookmark"></i> </h3>
            </div>

          </div>


      </div>

      <div style={{marginTop:'-550px',marginLeft:'3px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1 style={{color:'white'}}>Actual Games</h1>
          <button style={{marginRight:'50px',background:'rgb(239, 33, 201)',color:'white',fontWeight:'bolder',border:'none',padding:'10px',borderRadius:'10px',cursor:'pointer'}}><i class="fa-solid fa-filter"></i> Filter</button>
        </div>
        <div style={{display:'flex',marginTop:'10px'}}>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam1.webp" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>Sniper Elite 5</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam2.webp" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>SpiderMan</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam3.png" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>Skyrim</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam4.jpg" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>Dying Light 2 Stay </h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam5.avif" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>LEGO Star Wars</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam6.jpg" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>No More Heroes III</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam7.jpg" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>The Pathless</h2>
          </div>
        </div>

        <div style={{display:'flex',marginTop:'10px'}}>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam8.jpg" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>Biomutant</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam9.jpg" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>Escape from..</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam10.avif" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>TRANSFORMERS..</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam11.jpg" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>KATANA KAMI:.. </h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam12.avif" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>LEGO The Incredibles</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam13.jpg" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>Kingdom Come:..</h2>
          </div>
          <div style={{background:'url(./images/bgimage3.jpg)',width:'200px',height:'200px',borderRadius:'20px',marginRight:'20px'}}>
            <img src="./images/gam14.avif" alt="" style={{width:'200px',height:'170px',borderRadius:'20px'}} />
            <h2 style={{textAlign:'center',color:'white',fontSize:'20px',fontWeight:'500px'}}>NieR: Automata</h2>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
