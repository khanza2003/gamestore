import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(/images/bgimage.jpg)`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
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
            marginLeft: '-30px',
          }}
        >
          <p>🎮 The Game Zone</p>
        </div>

        {/* Navigation Links */}
        <ul className="navbar" style={{ display: 'flex', listStyle: 'none', gap: '20px', width: '120px' }}>
          <li>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '20px' }}>Landing</Link>
          </li>
          <li>
            <Link to="/home" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '20px' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '20px' }}>About</Link>
          </li>
        </ul>

        {/* Play Now Button */}
        <Link to="/play">
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
              fontWeight: 'bold',
              marginRight: '20px',
            }}
          >
            <i className="fas fa-play" style={{ color: 'white' }}></i> Play Now
          </button>
        </Link>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4" style={{ marginTop: '150px', fontSize: '40px' }}>
          <h1 style={{ color: 'white' }}>The Best <span style={{ color: 'rgb(8, 8, 164)' }}>Games</span><br />Out There</h1>
        </div>
        <div className="col-lg-4">
          <img
            src="/images/bgimage1.gif"
            alt="Background visual"
            style={{
              width: '400px',
              borderRadius: '50%',
              height: '400px',
              display: 'block',
              margin: '0 auto',
              marginTop: '-215px',
            }}
          />
        </div>
        <div className="col-lg-4">
          <p style={{ color: 'white', fontSize: '30px', marginLeft: '980px', marginTop: '-320px' }}>
            <span style={{ color: 'rgb(237, 19, 154)', fontWeight: '600' }}>The Game Zone Store</span> is your go-to hub for the latest video games, consoles, and accessories. Shop easily, discover exclusive deals, and join a vibrant gaming community. Level up your gaming experience with us!
          </p>
          <button
            style={{
              color: 'white',
              background: 'rgb(237, 19, 154)',
              borderRadius: '20px',
              cursor: 'pointer',
              marginLeft: '980px',
              fontSize: '25px',
              padding: '10px',
              marginTop: '10px',
            }}
          >
            View More
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mt-5">
        <div
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundImage: 'url(./images/bgimage2.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '50px',
            borderRadius: '10px',
            height: '150vh',
            marginTop: '170px',
          }}
        >
          <div style={{ display: 'flex' }}>
            {/* Individual Cards */}
            <div className="card1" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '10px' }}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game1.jpg" alt="" />
              <p>Explore epic adventures and immersive worlds in our exclusive game collection.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '20px',cursor:'pointer', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card2" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px', marginRight: '10px' }}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game2.jpg" alt="" />
              <p>Step into the future and gear up for thrilling missions in our action-packed game selection.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px',cursor:'pointer', marginTop: '20px', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card3" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px',cursor:'pointer', width: '300px', marginRight: '10px' }}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game3.jpg" alt="" />
              <p>Join the battle and lead your squad to victory in our intense shooter games.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '20px',cursor:'pointer', border: 'none', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
            <div className="card4" style={{ background: 'url(./images/bgimage3.jpg)', height: '300px', width: '300px' }}>
              <img style={{ width: '300px', height: '200px' }} src="./images/game4.jpeg" alt="" />
              <p>Dive into intense combat scenarios and fight for victory with our action-packed games.</p>
              <button style={{ background: 'rgb(3, 3, 141)', marginLeft: '100px', marginTop: '20px', border: 'none',cursor:'pointer', borderRadius: '10px', color: 'white', padding: '10px' }}>View Collection</button>
            </div>
          </div> 
        </div>

        {/* Deals of the Day Section */}
        <h1 style={{ color: 'white', textAlign: 'center', marginTop: '-760px',fontSize:'35px' }}>DEALS OF THE DAY</h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'250px',marginRight:'10px' }}>
          <img style={{ width: '100px', height: '132px' }} src="./images/game5.png" alt="" />
            <div>
              <p style={{ color: 'white' }}>A first-person shooter with Booker and Elizabeth in Columbia, exploring freedom.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center'}}>-17%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center'}}><s>$75.00</s>$64.00</p>
            </div>
            {/* Add more deal items here */}
          </div>

          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'250px',marginRight:'10px' }}>
          <img style={{ width: '100px', height: '132px' }} src="./images/game5.webp" alt="" />
            <div>
              <p style={{ color: 'white' }}>An action game where Heller seeks revenge with shape-shifting powers in New York City.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center'}}>-25%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center'}}><s>$65.00</s>$53.00</p>
            </div>
            {/* Add more deal items here */}
          </div>

          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'250px',marginRight:'10px' }}>
          <img style={{ width: '100px', height: '132px' }} src="./images/game7.png" alt="" />
            <div>
              <p style={{ color: 'white' }}>A shooter where Captain Walker faces moral dilemmas in Dubai's sandstorm.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center'}}>-18%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center'}}><s>$80.00</s>$68.00</p>
            </div>
            {/* Add more deal items here */}
          </div>

          <div style={{ display: 'flex', gap: '20px',background:'url(./images/bgimage3.jpg)',width:'250px',marginRight:'10px' }}>
          <img style={{ width: '100px', height: '132px' }} src="./images/game8.jpg" alt="" />
            <div>
              <p style={{ color: 'white' }}>A simulation game where players manage a barbarian tribe in a hostile world.</p>
              <h3 style={{color:'rgb(5, 5, 145)',textAlign:'center'}}>-17%</h3>
              <p style={{color:'white',fontWeight:'bold',textAlign:'center'}}><s>$75.00</s>$64.00</p>
            </div>
            {/* Add more deal items here */}
          </div>
        </div>


      </div>

      <div style={{display:'flex',marginTop:'20px',marginLeft:'20px'}}>
          <div>
            <h1 style={{color:'white',fontSize:'35px'}}>Categories</h1>
            <ul style={{color:'white',lineHeight:'30px',listStyle:'none'}}>
              <li><i class="fa-regular fa-circle-play" ></i>PSP</li> <hr />
              <li><i class="fa-regular fa-circle-play" ></i>PS Vita</li> <hr />
              <li><i class="fa-regular fa-circle-play" ></i>PlayStation2</li> <hr />
              <li><i class="fa-regular fa-circle-play" ></i>PlayStation3</li> <hr />
              <li><i class="fa-regular fa-circle-play" ></i>XBOX 360</li> <hr />
              <li><i class="fa-regular fa-circle-play" ></i>Nintendo Wii</li> <hr />
              <li><i class="fa-regular fa-circle-play" ></i>Nintendo DS</li> <hr />
            </ul>
          </div>
          <div style={{marginLeft:'40px'}}>
            <h1 style={{color:'white',fontSize:'35px'}}>Featured Products</h1>
            <div style={{display:'flex'}}>
              <div style={{width:'250px',height:'385px',background:'url(./images/bgimage3.jpg)',marginRight:'10px'}}>
                <img style={{width:'250px',height:'240px'}} src="./images/game9.jpg" alt="" />
                <h2 style={{color:'white',textAlign:'center'}}>Batman: Arkham Knight</h2> 
                <h1 style={{color:'rgb(11, 11, 202)',textAlign:'center'}}>$55.00</h1>
                <button style={{color:'white',background:'rgb(244, 13, 171)',cursor:'pointer',padding:'10px',fontSize:'20px',marginLeft:'90px',borderRadius:'10px',border:'none'}}>Buy</button>

              </div>
              <div style={{width:'250px',height:'385px',background:'url(./images/bgimage3.jpg)',marginRight:'10px'}}>
              <img style={{width:'250px',height:'240px'}} src="./images/game10.jpg" alt="" />
              <h2 style={{color:'white',textAlign:'center'}}>Marvel's Spider-Man: Miles Morales</h2>
              <h1 style={{color:'rgb(11, 11, 202)',textAlign:'center'}}>$70.00</h1>
              <button style={{color:'white',background:'rgb(244, 13, 171)',padding:'10px',cursor:'pointer',fontSize:'20px',marginLeft:'90px',borderRadius:'10px',border:'none'}}>Buy</button>

              </div>
              <div style={{width:'250px',height:'385px',background:'url(./images/bgimage3.jpg)',marginRight:'10px'}}>
              <img style={{width:'250px',height:'240px'}} src="./images/game11.jpg" alt="" />
              <h2 style={{color:'white',textAlign:'center'}}>Middle-earth: Shadow of Mordor</h2>
              <h1 style={{color:'rgb(11, 11, 202)',textAlign:'center'}}>$64.00</h1>
              <button style={{color:'white',background:'rgb(244, 13, 171)',padding:'10px',cursor:'pointer',fontSize:'20px',marginLeft:'90px',borderRadius:'10px',border:'none'}}>Buy</button>

              </div>
              <div style={{width:'250px',height:'385px',background:'url(./images/bgimage3.jpg)',marginRight:'10px'}}>
              <img style={{width:'250px',height:'240px'}} src="./images/game12.jpg" alt="" />
              <h2 style={{color:'white',textAlign:'center'}}>Assassin's Creed II</h2>
              <h1 style={{color:'rgb(11, 11, 202)',textAlign:'center',marginTop:'30px'}}>$45.00</h1>
              <button style={{color:'white',background:'rgb(244, 13, 171)',cursor:'pointer',padding:'10px',fontSize:'20px',marginLeft:'90px',borderRadius:'10px',border:'none'}}>Buy</button>
              </div>
              <div style={{width:'250px',height:'385px',background:'url(./images/bgimage3.jpg)',marginRight:'10px'}}>
                <img style={{width:'250px',height:'240px'}} src="./images/game13.jpg" alt="" />
                <h2 style={{color:'white',textAlign:'center'}}>Watch Dogs 2</h2> 
                <h1 style={{color:'rgb(11, 11, 202)',textAlign:'center',marginTop:'30px'}}>$50.00</h1>
                <button style={{color:'white',background:'rgb(244, 13, 171)',cursor:'pointer',padding:'10px',fontSize:'20px',marginLeft:'90px',borderRadius:'10px',border:'none'}}>Buy</button>

              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Landing;
