import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Categories</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/travel(300x168).jpg" alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>James Green</span>
              <span className={styles.date}>05/07/2025</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>

      </div>

        <div className={styles.content}>
          <div className={styles.posts}>
            <Menu />
          </div>
        </div>

    </div>
  )
}

export default SinglePage