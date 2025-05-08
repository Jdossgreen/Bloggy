import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Blog Post Title</h1>
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
          <div className={styles.post}>
            <div className={styles.description}>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur est suscipit dignissimos rem ullam amet. Itaque labore quod veritatis aliquid nemo, cumque maxime deserunt dolorum accusantium, magnam, reprehenderit earum.
              </p>

              <h2>Header</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur est suscipit dignissimos rem ullam amet. Itaque labore quod veritatis aliquid nemo, cumque maxime deserunt dolorum accusantium, magnam, reprehenderit earum.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur est suscipit dignissimos rem ullam amet. Itaque labore quod veritatis aliquid nemo, cumque maxime deserunt dolorum accusantium, magnam, reprehenderit earum.
              </p>
            </div>
            <div className={styles.comment}>
              <Comments />
            </div>
          </div>
          <Menu />
        </div>
    </div>
  )
}

export default SinglePage