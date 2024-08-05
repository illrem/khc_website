// import React from "react";
"use client";
import styles from "./login.module.css";

import { login, signup } from "./actions";
import { useSearchParams } from "next/navigation";

export function getError() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  return message === null
    ? null
    : "Sorry, something went wrong: " + message;
}

export default function LoginPage() {
  const errorText= getError();
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <form className={styles.form}>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <label id="error">{errorText}</label>
            <button formAction={login} className={styles.loginButton}>
              Log in
            </button>
            <button formAction={signup} className={styles.loginButton}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}