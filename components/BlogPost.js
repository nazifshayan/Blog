import styles from './BlogPost.module.css';

const BlogPost = ({ post }) => {
    return (
        <article className={styles.post}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
    );
};

export default BlogPost;