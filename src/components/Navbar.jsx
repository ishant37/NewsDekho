import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      background: 'rgba(34,34,59,0.98)',
      boxShadow: '0 2px 12px rgba(34,34,59,0.12)',
      padding: '0.7rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 200
    }}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/" style={{ fontWeight: 700, fontSize: '1.7rem', color: '#f6d365', letterSpacing: '2px', textShadow: '0 2px 8px #22223b' }}>
          NewsDekho
        </Link>
        <ul className="navbar-nav d-flex flex-row" style={{ gap: '1.5rem', marginBottom: 0 }}>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }} to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }} to="/sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }} to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
