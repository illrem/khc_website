import styles from "./login.module.css";
import { reset } from "./actions";
export default function passwordResetPage() {
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <form className={styles.form}>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <button formAction={reset} className={styles.loginButton}>
              Reset
            </button>
          </form>
        </div>
      </div>
          
    </>
  );
}
