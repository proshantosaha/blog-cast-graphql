import Link from "next/link";
import React from "react";
import Socials from "./socials";

const Header = () => {
  return (
    <header>
      <h1>Blogcast</h1>
      <nav>
        <link>Home</link>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
      <div>
        <Socials />
        <button>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
