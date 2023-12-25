//  Class Component

//  rcc  or  rce ( recommended )

//  rcc

// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }

//  rce ( recommended )

// import React, { Component } from 'react'

// export class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }

// export default Header

//  Function Component

//  rfc or  rfce ( recommended )

// rfc

// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// rfce ( recommended )

// import React from "react";

// function Header() {
//   return <div>Header</div>;
// }

// export default Header;


// Arrow Function Component

//  rafc or rafce ( recommended -- most used )

// rafc 

// import React from 'react'

// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

//  rafce ( recommended -- most used )

import React from 'react'
import './Header.scss'
import appStyles from '../../App.module.css'

const Header = () => {
  return (
    <div className='header'>
      <h1 className={appStyles.h1}>Header Component</h1>
    </div>
  )
}

export default Header;

