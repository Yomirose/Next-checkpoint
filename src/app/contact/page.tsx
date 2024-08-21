import Link from "next/link";
import styles from "../styles/Style.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <p className={styles.orf}>
        View our Project now <Link className="text-red-500" href="/home">home</Link>
      </p>
      <p>© 2024 by ORY. Powered and secured by ory</p>
    </div>
  );
}
