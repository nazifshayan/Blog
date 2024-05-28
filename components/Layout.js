import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>My Blog</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;