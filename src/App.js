
// import React, { useState } from 'react'; // Import the useState hook

// export default App;
// import './App.css';
// import { Signup } from './Component/Signup';
// import { Login } from './Component/Login';

// function App() {
//   const [showSignup, setShowSignup] = useState(false);

//   const toggleSignup = () => {
//     setShowSignup(!showSignup);
//     return (
//       <div>
//         {showSignup ? <Signup onToggleSignup={toggleSignup} /> : <Login onToggleSignup={toggleSignup} />}
//       </div>
//     )
//   };

import React, { useState } from 'react';
import './App.css';
import { Signup } from './Component/Signup';
import { Login } from './Component/Login';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {showSignup ? <Signup onToggleSignup={toggleSignup} /> : <Login onToggleSignup={toggleSignup} />}
    </div>
  );
}

export default App;
