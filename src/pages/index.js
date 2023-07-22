import Link from "next/link";
import { client } from "../libs/client";
import "../styles/input.css";
import { BlogCard } from "../components/BlogCard";

export default function Home({ blog }) {
  return (
    <>
      <Link href="/">
        <h1 className="text-4xl text-center my-14 animate-slideInFromBottom duration-1000">Next.js × MicroCMS</h1>
      </Link>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blog.map((blogItem) => (
            <BlogCard key={blogItem.id} blog={blogItem} />
          ))}
        </div>
      </div>
    </>
  )
}

// SSG
export async function getStaticProps() {
  const data = await client
    .get({
      endpoint: 'blog',
    })
  return {
    props: { blog: data.contents },
  };
}
