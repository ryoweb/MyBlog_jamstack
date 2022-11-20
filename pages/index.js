import { client } from '../api/client'
import Link from 'next/link'

export const getStaticProps = async() => {

  const data = await client.get({ endpoint: 'blog' });
  console.log("aa");
  return {
    props: {
      blog: data.contents,
    },
  }
}

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
