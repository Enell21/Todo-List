import { Link } from 'react-router-dom';

import './header.module.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/myList'>My List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
