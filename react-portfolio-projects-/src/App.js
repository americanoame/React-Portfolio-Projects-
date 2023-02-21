import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// import Footer from './components/Footer';

export default function app() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' component={About} exact>
          <About />
        </Route>

        <Route path='/portfolio' component={Portfolio} exact>
          <Portfolio />
        </Route>

        <Route path='/Contact' component={Contact} exact>
          <Contact />
        </Route>

        <Route path='/resume' component={Resume} exact>
          <Resume />
        </Route>

      </Routes>
    </Router>
  )
}





// function App() {
//   return (
//     <Router>
//       <div>


//         <Routes>
//           <Route>
//             <Route path="/contact"
//               element={<Contact />}
//             />

//             <Route
//               path="/project"
//               element={<Project />}
//             />

//             <Route
//               path="/navbar"
//               element={<Navbar />}
//             />

//             {/* <Route
//             path="/resume"
//             element={<Resume />}
//           />  */}
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
