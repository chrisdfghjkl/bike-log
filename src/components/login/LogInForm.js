import styles from './LogInForm.module.css';

const LogInForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <label htmlFor='username'><b>Username</b></label>
        <input type="text" placeholder="Enter Username" id='username' required />

        <label htmlFor='pwd'><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pwd" required />
        <button type="submit">Login</button>
      </form>
      <p>Create Account</p>
    </div>
  )
};

export default LogInForm;