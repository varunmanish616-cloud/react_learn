import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <nav>
        <ul>
            <li>
            <Link to={'One'}>
            One
            </Link>
            </li>
            <li>
            <Link to={'Two'}>
            Two
            </Link>
            </li>
            <li>
            <Link to={'Three'}>
            Three
            </Link>
            </li>
            <li>
            <Link to={'Four'}>
            Four
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header