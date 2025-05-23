import styles from "./page.module.css";

export default async function generateStaticParams({params}: {params: {id: string}}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return (
        <div className={styles.posts}>
            <div className={styles.card}>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            </div>
        </div>
    );
}