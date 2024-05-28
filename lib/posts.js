import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => (a.data < b.data ? 1 : -1));
}

export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName =>{
        return {
            params: {
                slug: fileName.replace(/\.md/, ''),
            },
        };
    });
}

export async function getAllPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}