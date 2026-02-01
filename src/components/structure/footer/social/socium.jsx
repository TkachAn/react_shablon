import s from "./s.module.css";

export function Social() {
  return (
    <div className={s.social}>
      <h5>Follow Us</h5>
      <p>
        Facebook: <a href="https://facebook.com">facebook.com/yourpage</a> <br />
        Twitter: <a href="https://twitter.com">twitter.com/yourpage</a> <br />
        Instagram: <a href="https://instagram.com">instagram.com/yourpage</a>
      </p>
    </div>
  );
}

