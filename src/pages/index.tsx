import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私は、Next.jsの講座を受講しています。</p>
      </section>
      <section>
        <div>エンジニアのブログ</div>
        {/* 以下がブログ表示 */}
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <Image
                className={styles.thumbnailImage}
                src="/images/thumbnail01.jpg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使う場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>may 8, 2023</small>
          </article>
          <article>
            <Link href="/">
              <Image
                className={styles.thumbnailImage}
                src="/images/thumbnail01.jpg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使う場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>may 8, 2023</small>
          </article>
          <article>
            <Link href="/">
              <Image
                className={styles.thumbnailImage}
                src="/images/thumbnail01.jpg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使う場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>may 8, 2023</small>
          </article>
          <article>
            <Link href="/">
              <Image
                className={styles.thumbnailImage}
                src="/images/thumbnail01.jpg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使う場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>may 8, 2023</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
