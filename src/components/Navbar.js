import React from 'react';
import CategoryFilter from '../components/CategoryFilter'

const Navbar = () => (
  <nav className="panel-bg flex align-center center">
    <h1 className="logo">Bookstore CMS</h1>
    <span className="books">Books</span>
    <CategoryFilter />
    <i className="fa fa-user right oval" />
  </nav>
);

export default Navbar;