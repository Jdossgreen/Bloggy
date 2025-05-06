import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src='/culture(1450x960).jpg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11/02/25 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1>Dive Into Culture Like Never Before!</h1>
            </Link>
            <p className={styles.desc}>From art and music to traditions and untold stories, culture is what connects us—and it’s always evolving. This blog explores the richness of global and local cultures, spotlighting the people, movements, and moments that shape how we live, think, and create.</p>
            <Link href="/" className={styles.link}> Read More </Link>
        </div>
    </div>
  )
}

export default Card