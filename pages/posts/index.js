import { getSortedPostsData } from '@/lib/posts';
import Layout from '../components/Layout';
import BlogList from "../components/BlogList";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

const Home = ({ allPostsData }) => {
    return (
        <Layout>
            <BlogList posts={allPostsData} />
        </Layout>
    );
};

export default Home;