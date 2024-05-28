import Link from 'next/link';
import styles from './BlogList.module.css';

const BlogList = ({ posts }) =>{
    return (
        <ul className={styles.list}>
            {posts.map(({ id, title, summary }) => (
                <li key={id} className={styles.listItem}>
                    <Link href={`/posts/${id}`}>
                        <a>
                            <h2>{title}</h2>
                            <p>{summary}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default BlogList;