import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = ({key,item}) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
      <div className={styles.imageContainer}>
         <Image src={item.img} alt='' fill className={styles.image} />
      </div>
      )}

        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>{item.createdAt.substring(0,10)} | {" "}</span>
            <span className={styles.category}>{item.cat?.title}</span>
          </div>
          <Link href={`/posts/${item.slug}`}>
            <h1>{item.title}</h1>
          </Link>
          <p className={styles.desc}>
            {item.desc.substring(0, 60)}
            {/**From art and music to traditions and untold stories, culture is what connects us—and it’s always evolving. This blog explores the richness of global and local cultures, spotlighting the people, movements, and moments that shape how we live, think, and create.*/}
          </p>
          <Link href={`/posts/${item.slug}`} className={styles.link}>
            Read More 
          </Link>
      </div>
    </div>
  )
}

export default Card