
import { client } from '../api/client'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/index.module.css'

// three
import Sphere from "../components/AnimatedSphere"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"


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
      <Header />
      <div className={styles.topcontainer}></div>
      <ul className={styles.main}>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <div className={styles.blogtitle}>
                {blog.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Sphere />
      </Canvas>
    </div>
  );
}