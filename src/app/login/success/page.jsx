"use client";
import styles from "./SignUp.module.css";
import { useSearchParams } from "next/navigation";

export function getMessage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  return message === null
    ? null
    : message;
}

export default function SignupSuccessPage() {
  const msgTxt = getMessage();
  return (
    <>
      <div className={styles.signUpPage}>
        <div className={styles.container}>
        <p>{msgTxt}</p>
        </div>
      </div>
    </>     
  );
}