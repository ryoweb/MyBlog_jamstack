import { client } from '../api/client'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/index.module.css'

export const getStaticProps = async() => {

  const data = await client.get({ endpoint: 'blog' });
  return {
    props: {
      blog: data.contents,
    },
  }
}

export default function Home({ blog }) {
  return (
    <div>
      <Header>
      <div className={styles.topcontainer}></div>
      <ul className={styles.main}>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <div className={styles.blogtitle}>{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
      </Header>
    </div>
  );
}
