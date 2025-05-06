import Link from 'next/link'
import styles from './menuPosts.module.css'
import Image from 'next/image'

const MenuPosts = ({ withImage }) => {
  return (
    /**Post Title */

    <div className={styles.items}>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel(300x168).jpg" alt="travel" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            Travel
          </span>
          <h3 className={styles.postTitle}>Post Title</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe - </span>
            <span className={styles.date}>10/03/2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
          <Image src="/culture(1450x960).jpg" alt="culture" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>Post Title 2</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jane Doe - </span>
            <span className={styles.date}>01/10/2025</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
          <Image src="/Food(275x183).jpg" alt="food" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>
            Food
          </span>
          <h3 className={styles.postTitle}>Post Title 3</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bob Doe - </span>
            <span className={styles.date}>09/15/2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
          <Image src="/Fashion(318x159).jpg" alt="Fashion" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>Post Title 4</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jim Doe - </span>
            <span className={styles.date}>03/27/2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
          <Image src="/coding(2560X1709).jpg" alt="coding" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>
            Coding
          </span>
          <h3 className={styles.postTitle}>Post Title 5</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bill Doe - </span>
            <span className={styles.date}>07/23/2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
          <Image src="/Style(Words).jpg" alt="style" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>
            Style
          </span>
          <h3 className={styles.postTitle}>Post Title 6</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Al Doe - </span>
            <span className={styles.date}>12/17/2024</span>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default MenuPosts