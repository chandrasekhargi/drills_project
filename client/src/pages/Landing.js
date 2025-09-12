
// import React from 'react'; 
// const login = process.env.REACT_APP_GOOGLE_LOGIN_URL || 'http://localhost:5000/auth/google'; 
// export default function Landing(){ 
//     return (
//     <div>
//         <h1>Interview Drills</h1>
//         <a href={login}>
//             <button>Sign in with Google</button>
//         </a>
//     </div>
//     ); 
// }

import React from 'react';
import GoogleButton from 'react-google-button';

const loginUrl = process.env.REACT_APP_GOOGLE_LOGIN_URL || 'http://localhost:3000/auth/google';

export default function Landing() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Interview Drills</h1>
      <a href={loginUrl} style={styles.link}>
        <GoogleButton />
      </a>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '2rem',
    color: '#202124',
  },
  link: {
    textDecoration: 'none',
  },
};
