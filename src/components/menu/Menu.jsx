import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>


      {/**
      POPULAR SECTION
       */}
      <h2 className={styles.subtitle}>{"What's hot?"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPosts withImage={false} />

    {/**  <div className={styles.items}>

      <Link href="/" className={styles.item}>
        
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

    </div> */}

      {/**
      CATEGORIES SECTION
       */}
      <h2 className={styles.subtitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>

      <MenuCategories />

      {/**
      EDITORS PICK SECTION
       */}

      <h2 className={styles.subtitle}>Chosen by the author</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      
      <MenuPosts withImage={true} />
      
    </div>
  );
};

export default Menu