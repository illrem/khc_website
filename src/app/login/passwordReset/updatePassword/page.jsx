import styles from "./login.module.css";
import { reset } from "./actions";
export default function passwordResetPage() {
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <form className={styles.form}>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={reset} className={styles.loginButton}>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}