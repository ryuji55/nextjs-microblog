import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "../../lib/post";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
  }[];
};

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私は、Next.jsの講座を受講しています。</p>
      </section>
      <section>
        <div>エンジニアのブログ</div>
        {/* 以下がブログ表示 */}
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <Image
                  className={styles.thumbnailImage}
                  src={`${thumbnail}`}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <p className={utilStyles.boldText}>{title}</p>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
