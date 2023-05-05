import React from 'react'
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/Menu' element={<Menu />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react'


//   const App=()=>{
//     const [greeting,setGreeting]= React.useState('...Welcome to React');
//     const [isShow,setShow]=React.useState(true);

//     // const handleToogle=()=>{
//     //   setShow(!isShow);
//     // }
//     const handleChange=(event)=>{
//       setGreeting(event.target.value);
//     };
//     const handleToogle=()=>{
//       alert(greeting);
//     }


//   return (
//     <div>
//       <button onClick={handleToogle} type='button' >
//         Toogle
//       </button>
//       <input type="text" value={greeting} onChange={handleChange}/>
//       {isShow ? <Welcome text={greeting}/> : null}
//     </div>
   
    
//   );
// };
// const Welcome =({text})=>{
//   return <h1>{text}</h1>
// }

// export default App
