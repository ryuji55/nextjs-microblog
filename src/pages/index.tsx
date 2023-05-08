import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/layout";
import utilStyles from "../styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私は、Next.jsの講座を受講しています。</p>
      </section>
      <section>
        <div>エンジニアのブログ</div>
        <div>
          <article>
            <Link href="/">
              <Image
                src="/images/thumbnail01.jpg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <Link href="/">
              <p>SSGとSSRの使う場面はいつなのか？</p>
            </Link>
            <br />
            <small>may 8, 2023</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
