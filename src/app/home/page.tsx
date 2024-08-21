import React from "react";
import Image from "next/image";
import styles from "../styles/Style.module.css";


export default function Home() {
  return (
    <div className={styles.pulpy}>
      <h1 className={styles.tag}>Here are the samples of my project</h1>
      <div className={styles.image}>
      <Image src="/images/pic5.jpg" alt="" width={300} height={200}/>
      <Image src="/images/twisting.jpg" alt="" width={300} height={300}/>
      <Image src="/images/pic4.jpg" alt="" width={300} height={300}/>
      <Image src="/images/pic3.jpg" alt="" width={300} height={300}/>
      </div>
      <div className={styles.image}>
      <Image src="/images/pic6.jpg" alt="" width={400} height={200}/>
      <Image src="/images/pic2.jpg" alt="" width={400} height={200}/>
      <Image src="/images/pi3.jpg" alt="" width={300} height={200}/>
      </div>
    </div>
  );
}
