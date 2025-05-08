"use client";

import Image from 'next/image'
import styles from './writePage.module.css'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"

const WritePage = () => {

  const [open, setOpen] = useState(false);
  const [value,setValue] = useState("");
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <input type="text" placeholder='Title..' />
            <div className={styles.editor}>
                <button className={styles.button}>
                  <Image src='/plus.png' alt='add' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>

                        <button className={styles.addButton}>
                            <Image src='/image.png' alt='' width={16} height={16} />
                        </button>

                        <button className={styles.addButton}>
                            <Image src='/external.png' alt='' width={16} height={16} />
                        </button>

                        <button className={styles.addButton}>
                            <Image src='/video.png' alt='' width={16} height={16} />
                        </button>

                    </div>
                )}
                <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell Your Story' />
            </div>
        </div>
    </div>
  )
}

export default WritePage