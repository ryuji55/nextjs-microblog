import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

type Props = {
  children: React.ReactNode;
};

const myPhoto = "/images/my_photo.JPG";
const name = "Ryuji Takagi";
export const siteTitle = "Next.js blog";

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <Image
            className={utilStyles.borderCircle}
            src={myPhoto}
            alt="myPhoto"
            width={100}
            height={100}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>

        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
