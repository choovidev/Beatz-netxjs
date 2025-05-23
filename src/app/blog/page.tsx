import styles from "./page.module.css";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default async function Blog() {
   
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()
   
    return (
        <>
        <h1 className={styles.blogTitle}>Blog</h1>

        <div className={styles.blog}>
            <div className={styles.blogContainer}>
                {data.slice(0, 5).map((post: Post) => (
                    <div key={post.id} className={styles.blogCard}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
