"use client";

import Image from 'next/image';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Client, Storage, ID, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const storage = new Storage(client);
const databases = new Databases(client);

const WritePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [imageFileId, setImageFileId] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const upload = async () => {
      try {
        const result = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
          ID.unique(),
          file
        );

        const url = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${result.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
        setImageUrl(url);
        setImageFileId(result.$id);
        console.log("File uploaded:", result);
        console.log("Accessible URL:", url);
      } catch (err) {
        console.error("Upload failed:", err);
      }
    };

    if (file) upload();
  }, [file]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handlePublish = async () => {
    if (!title || !value) {
      alert("Title and content are required.");
      return;
    }

    try {
      const result = await databases.createDocument(
        "your-database-id", // Replace with your real database ID
        "your-collection-id", // Replace with your real collection ID
        ID.unique(),
        {
          title,
          content: value,
          imageUrl,
          userId: session?.user?.email || "anonymous"
        }
      );

      console.log("Post created:", result);
      alert("Post published!");
      router.push("/"); // Redirect to home or blog page after publish
    } catch (err) {
      console.error("Publish failed:", err);
      alert("Failed to publish post.");
    }
  };

  if (status === "loading") {
    return <div className={styles.loading}>Loading..</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Title.."
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className={styles.canvas}>
          <div className={styles.editor}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
              <Image src="/pluz.png" alt="add" width={16} height={16} />
            </button>

            {open && (
              <div className={styles.add}>
                <input
                  type="file"
                  id="image"
                  onChange={e => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />

                <button className={styles.addButton}>
                  <label htmlFor="image">
                    <Image src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>

                <button className={styles.addButton}>
                  <Image src="/external.png" alt="" width={16} height={16} />
                </button>

                <button className={styles.addButton}>
                  <Image src="/video.png" alt="" width={16} height={16} />
                </button>
              </div>
            )}

            <ReactQuill
              className={styles.textArea}
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell Your Story..."
            />
          </div>

          {imageUrl && (
            <div style={{ marginTop: '10px' }}>
              <strong>Uploaded Image:</strong><br />
              <Image src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
            </div>
          )}

          <button className={styles.publish} onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
