import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
      <ul className={styles.links_list}>
        <li>
        <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Sobre
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Entrar contato:
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar