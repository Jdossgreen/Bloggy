import Image from 'next/image';
import styles from './comments.module.css'
import Link from 'next/link';

const Comments = () => {

    const status = "authenticated";
  return (
    <div className={styles.container}>

        <h1 className={styles.title}>Comments</h1>

        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment..." className={styles.input} />
                <button className={styles.button}>Submit</button>
            </div>
        ) : (
        <Link href="/login">Login to write a comment</Link>)}

        <div className={styles.comments}>

            <div className={styles.comment}>

                <div className={styles.user}>
                    <Image src="/logo.png" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>James Green</span>
                        
                        <span className={styles.date}>05/08/2025</span>
                    </div>
                </div>

                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aspernatur esse porro quod at nam molestiae doloribus repellendus perspiciatis dolore. Expedita similique quaerat molestiae amet nam? Doloribus voluptatibus blanditiis deleniti?
                </p>

            </div>

            <div className={styles.comment}>

                <div className={styles.user}>
                    <Image src="/logo.png" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>James Green</span>
                        
                        <span className={styles.date}>05/08/2025</span>
                    </div>
                </div>

                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aspernatur esse porro quod at nam molestiae doloribus repellendus perspiciatis dolore. Expedita similique quaerat molestiae amet nam? Doloribus voluptatibus blanditiis deleniti?
                </p>

            </div>

            <div className={styles.comment}>

                <div className={styles.user}>
                    <Image src="/logo.png" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>James Green</span>
                        
                        <span className={styles.date}>05/08/2025</span>
                    </div>
                </div>

                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aspernatur esse porro quod at nam molestiae doloribus repellendus perspiciatis dolore. Expedita similique quaerat molestiae amet nam? Doloribus voluptatibus blanditiis deleniti?
                </p>

            </div>

            <div className={styles.comment}>

                <div className={styles.user}>
                    <Image src="/logo.png" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>James Green</span>
                        
                        <span className={styles.date}>05/08/2025</span>
                    </div>
                </div>

                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aspernatur esse porro quod at nam molestiae doloribus repellendus perspiciatis dolore. Expedita similique quaerat molestiae amet nam? Doloribus voluptatibus blanditiis deleniti?
                </p>

            </div>

        </div>

    </div>
  )
}

export default Comments