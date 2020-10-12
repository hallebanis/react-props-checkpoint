import React from 'react';
import Profile from './profile/profile'
import pic1 from './img/pic.jpg'
//import pic2 from './img/pic2.jpg'

function App() {
 const handleName=(x)=>{
    alert(x);
  }
  return (
    <div className="App">
      <Profile fullName="John Wayne" profession="Actor" bio='John Wayne [ d͡ʒɑn weɪn]2, pseudonyme de Marion Mitchell Morrison (né Marion Robert Morrison), est un acteur, réalisateur et producteur américain né le 26 mai 1907 à Winterset (Iowa) et mort le 11 juin 1979 à Los Angeles.' 
                handleName={handleName} >
       <img src={pic1} alt="img" style={{width:"150px"}}/>
      </Profile>
    </div>
  );
  
}

export default App;
