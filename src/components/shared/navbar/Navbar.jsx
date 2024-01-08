"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {

  return (
    <div
      className={`bg-gray-400 py-5 px-10 ${styles.container} flex justify-between`}
    >
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
