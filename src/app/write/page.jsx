"use client";

import Image from 'next/image';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Client, Storage, ID, Databases, Permission, Role } from 'appwrite';


const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const storage = new Storage(client);
const databases = new Databases(client);

const WritePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  // 1️⃣ Upload file whenever `file` changes
  useEffect(() => {
    const upload = async () => {
      try {
        const result = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
          ID.unique(),
          file,
          [
            Permission.read(Role.any()),       // 👈 Anyone can view
            Permission.write(Role.user('unique()')), // 👈 Owner can write
          ]
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

  // 2️⃣ Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [status, router]);

  // 3️⃣ Handle publish
  const handlePublish = async () => {
    if (!title || !value) {
      alert("Title and content are required.");
      return;
    }

    const result = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
      ID.unique(),
      {
        title,
        content: value,
        imageUrl,
        userId: session?.user?.email || "anonymous"
      },
      [
        Permission.read(Role.any()),         // Anyone can read
        Permission.update(Role.any()),       // Anyone can update
        Permission.delete(Role.any())        // Optional: allow deletes
      ]
    );
    

    try {
      const post = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
          title,
          content: value,
          imageUrl,
          userId: session?.user?.email || "anonymous",
          createdAt: new Date().toISOString(),
        }
      );
      console.log("Post created:", post);
      alert("Post published!");
      router.push("/");
    } catch (err) {
      console.error("Publish failed:", err);
      alert("Failed to publish post. Check console for details.");
    }
  };

  if (status === "loading") return <div className={styles.loading}>Loading..</div>;

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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <button className={styles.addButton}>
                  <label htmlFor="image">
                    <Image src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>
                {/* Add external/video buttons if needed */}
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
              <Image
                src={imageUrl}
                alt="Uploaded"
                width={600}
                height={400}
                style={{ maxWidth: "100%", height: "auto" }}
              />
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
