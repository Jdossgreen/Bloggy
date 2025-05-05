import React from 'react'
import styles from './feature.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, webwizard here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>🧙‍♂️Step into my digital lair where ideas spark, stories unfold, and creativity runs wild.</h1>
          <p className={styles.postDesc}>
          From curious thoughts to clever builds, this is where the magic happens—one post at a time. Browse the collection of carefully curated posts!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured