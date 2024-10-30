// Homes.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Homes() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(/images/bgimage.jpg)`,
        backgroundSize: 'cover',
        height: '107vh',
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

      {/* Main Content */}
      <div style={{ color: 'white', textAlign: 'center', paddingTop: '20vh',display:'flex',marginLeft:'60px' }}>
        <img style={{width:'920px',height:'410px',marginTop:'-100px',cursor:'pointer'}} src="./images/game15.jpg" alt="" />
        <div>
              <div style={{width:'450px',height:'200px',background:'url(./images/game14.webp)',marginLeft:'30px',marginTop:'-100px',cursor:'pointer'}}>
                
                <button style={{color:'white',background:'rgb(244, 13, 171)',padding:'10px',fontSize:'20px',borderRadius:'10px',border:'none',marginRight:'10px',marginTop:'150px'}}>Buy</button> </div>

                <div style={{width:'450px',height:'200px',background:'url(./images/game16.jpg)',marginLeft:'30px',marginTop:'10px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <button style={{color:'white',background:'rgb(244, 13, 171)',padding:'10px',fontSize:'20px',marginLeft:'10px',borderRadius:'10px',border:'none',marginTop:'150px'}}>Buy</button> </div>
        </div>
      </div>
      
 <div style={{display:'flex',marginLeft:'20px'}}>
        <div style={{width:'450px',height:'200px',background:'url(./images/game17.jpg)',marginLeft:'30px',marginTop:'10px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                  <button style={{color:'white',background:'rgb(244, 13, 171)',padding:'10px',fontSize:'20px',marginLeft:'200px',borderRadius:'10px',border:'none',marginTop:'132px'}}>Buy</button> </div>
  
                  <div style={{width:'450px',height:'200px',background:'url(./images/game18.jpg)',marginLeft:'30px',marginTop:'10px'}}>
                  <button style={{color:'white',background:'rgb(244, 13, 171)',padding:'10px',fontSize:'20px',marginLeft:'200px',borderRadius:'10px',border:'none',marginTop:'132px'}}>Buy</button> </div>
  
                  <div style={{width:'450px',height:'200px',background:'url(./images/game19.jpg)',marginLeft:'30px',marginTop:'10px'}}>
                  <button style={{color:'white',background:'rgb(244, 13, 171)',padding:'10px',fontSize:'20px',marginLeft:'200px',borderRadius:'10px',border:'none',marginTop:'132px'}}>Buy</button> </div>
                  </div>
      <div style={{background:'url(./images/bgimage2.jpg)',width:'100vw',height:'170vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',marginTop:'-20px'}}>
                  <h1 style={{color:'white',textAlign:'center',fontSize:'35px',fontWeight:'700',marginTop:'30px'}}>POPULAR GAMES</h1>
                  <div style={{ display: 'flex',marginLeft:'50px',marginTop:'30px' }}>
            {/* Individual Cards */}
            <div className="card1" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '30px' ,marginLeft:'30px'}}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game20.jpg" alt="" />
              <p>A sci-fi shooter where players use a nanosuit to battle aliens and mercenaries on a tropical island.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '1px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card2" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '10px' ,marginLeft:'30px'}}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game21.jpeg" alt="" />
              <p>An open-world game where players create chaos to overthrow a dictatorship on a vast island.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '1px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card3" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '10px',marginLeft:'30px' }}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game22.jpg" alt="" />
              <p>An action-adventure game where players control Marvel superheroes to save the world from threats.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '1px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card4" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px' ,marginLeft:'30px'}}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game23.jpeg" alt="" />
              <p>A post-apocalyptic shooter set in the dark tunnels of the Moscow Metro.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '20px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
          </div>

          <div style={{ display: 'flex',marginLeft:'50px',marginTop:'30px' }}>
            {/* Individual Cards */}
            <div className="card1" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '30px' ,marginLeft:'30px'}}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game24.jpg" alt="" />
              <p>A tactical shooter where players control agents in a dystopian future to eliminate rival corporations.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '1px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card2" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '10px' ,marginLeft:'30px'}}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game25.jpg" alt="" />
              <p>A first-person shooter where players fight as part of a ghost unit against a global superpower.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '1px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card3" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '10px',marginLeft:'30px' }}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game26.jpg" alt="" />
              <p>An action game where players control Fury to defeat the Seven Deadly Sins.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '20px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card4" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px' ,marginLeft:'30px'}}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game27.jpg" alt="" />
              <p>An open-world game where three criminals pull off heists in Los Santos.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '20px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
          </div>

          <h1 style={{color:'white',textAlign:'center',fontSize:'35px',fontWeight:'700',marginTop:'30px'}}>POPULAR GAMES</h1>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'370px',marginRight:'10px' }}>
          <img style={{ width: '150px', height: '200px' }} src="./images/game28.avif" alt="" />
            <div>
              <p style={{ color: 'white' ,fontSize:'20px'}}>An open-world game about an outlaw gang's struggles in the American West.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center',fontSize:'20px'}}>-24%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center',fontSize:'20px'}}><s>$100.00</s>$64.00</p>
            </div>
            {/* Add more deal items here */}
          </div>

          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'370px',marginRight:'10px' }}>
          <img style={{ width: '150px', height: '200px' }} src="./images/game30.avif" alt="" />
            <div>
              <p style={{ color: 'white' ,fontSize:'20px'}}>A stealth game where Big Boss infiltrates enemy bases in an open world.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center',fontSize:'20px'}}>-17%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center',fontSize:'20px'}}><s>$75.00</s>$64.00</p>
            </div>
            {/* Add more deal items here */}
          </div>

          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'370px',marginRight:'10px' }}>
          <img style={{ width: '200px', height: '200px' }} src="./images/game29.webp" alt="" />
            <div>
              <p style={{ color: 'white' ,fontSize:'20px'}}>An action-adventure game where Kratos battles gods and monsters while guiding his son, Atreus.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center',fontSize:'20px'}}>-20%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center',fontSize:'20px'}}><s>$80.00</s>$62.00</p>
            </div>
            {/* Add more deal items here */}
          </div>

          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'370px',marginRight:'10px' }}>
          <img style={{ width: '150px', height: '200px' }} src="./images/game31.webp" alt="" />
            <div>
              <p style={{ color: 'white' ,fontSize:'20px'}}>An action game set in ancient Egypt, exploring the Assassin Brotherhood's origins.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center',fontSize:'20px'}}>-17%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center',fontSize:'20px'}}><s>$75.00</s>$64.00</p>
            </div>
            {/* Add more deal items here */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Homes;
