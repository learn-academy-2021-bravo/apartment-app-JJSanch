// import React from "react"
// // import PropTypes from "prop-types"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// // import mockApartments from './mockApartments.js'
// // import {
// //   BrowserRouter as Router,
// //   Route, 
// //   Switch
// // } from 'react'
// // import Home from '.pages/Home'
// // import ApartmentIndex from '.pages/ApartmentIndex'
// // import ApartmentShow from './pages/ApartmentShow'
// // import NotFound from '.pages/NotFound'

// class App extends React.Component {
//   render() {
//     const {
//       logged_in,
//       current_user,
//       new_user_route,
//       sign_in_route,
//       sign_out_route
//     } = this.props
//     return (
//       <>
//         <Header/>
//         <h1>Welcome To Apartment App</h1>
//         { logged_in &&
//           <div>
//             <a href={sign_out_route }>Sign Out</a>
//           </div>
//         }
//         { !logged_in &&
//           <div>
//             <a href={ sign_in_route }>Sign In</a>
//           </div>
//         }
//         <Footer/>
//       </>
//     )
//   }
// }

// export default App

// {/* <Router>
//   <Switch>
//     <Route exact path="/" component={ Home } />
//     <Route path="/apartmentindex" component={ ApartmentIndex } />
//     <Route path="/apartmentshow" component={ ApartmentShow } />
//     <Route component={ NotFound }/>
//   </Switch>
// </Router> */}