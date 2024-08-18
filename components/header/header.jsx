//The header component contains the navigation bar for the website
//"use server";
//import React, { useState } from "react";
import styles from "./header.module.css";
import Smalllogo from "../logos/smallLogo.jsx";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

//The header component
export default async function Header() {
  //State to manage the menu open and close
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Function to close menu when a link is clicked
  // const handleLinkClick = () => {
  //  setIsMenuOpen(false);
  // };

  const canInitSupabaseClient = async () => {
    try {
      const {
        data: { user },
      } = await createClient().auth.getUser();
      return user != null;
    } catch (e) {
      return false;
    }
  };

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    console.log("signout sent");
    return redirect("/");
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    //The ul contains the navigation links and the hamburger icon
    //the navmenu uses state to determine if it should be active(in view) or not
    //The hamburger icon uses the onClick event listener and state to determine if it should look like a burger or a cross
    //When the hamburger icon is clicked, the state is toggled to show or hide the navigation links
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Smalllogo className={styles.navbranding} />


        <li className={styles.navitem}>
          <Link
            href="./"
            passHref
            className={`${styles.navlink}`}
          >
            Home
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link
            href="/about"
            passHref
            className={styles.navlink}
          >
            About
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link
            href="/whatson"
            passHref
            className={styles.navlink}
          >
            {"What's On"}
          </Link>
        </li>
        <li className={styles.navitem}>
          <a
            href="https://kingsheathclangers.godaddysites.com/ols/products/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navlink}
          >
            Merch
          </a>
        </li>
        <li className={styles.navitem}>
          <Link
            href="/contact"
            passHref
            className={styles.navlink}
          >
            Contact
          </Link>
        </li>
        {await isSupabaseConnected ?(
        <form action={signOut}>
        <button className={styles.navlink}>Logout</button>
        </form>
        ):
        (<li className={styles.navitem}>
          <Link
            href="/login"
            passHref
            className={styles.navlink}
          >
             LogIn
          </Link>
        </li>)}

      </nav>
    </header>
  );
}
