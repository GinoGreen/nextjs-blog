import Head from "next/head";
import Layout, {
   siteTitle,
} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
   const allPostsData = getSortedPostsData();
   return {
      props: {
         allPostsData,
      },
   };
}

function Home({ allPostsData }) {
   return (
      <Layout home>
         <Head>
            <title>{siteTitle}</title>
         </Head>
         <section
            className={utilStyles.headingMd}
         >
            <p>
               Hello, I'm Luigi Verde, a developer
               with a focus on React and Java. I
               craft user-friendly experiences
               with React and build robust backend
               foundations using Java. I'm
               passionate about continuous growth
               in this dynamic field and always
               ready for new challenges.
            </p>
            <p>
               (This is a sample website - you’ll
               be building a site like this on{" "}
               <a href="https://nextjs.org/learn">
                  our Next.js tutorial
               </a>
               .)
            </p>
         </section>
         <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
         >
            <h2 className={utilStyles.headingLg}>
               Blog
            </h2>
            <ul className={utilStyles.list}>
               {allPostsData.map(
                  ({ id, date, title }) => (
                     <li
                        className={
                           utilStyles.listItem
                        }
                        key={id}
                     >
                        <Link
                           href={`/posts/${id}`}
                        >
                           {title}
                        </Link>
                        <br />
                        <small
                           className={
                              utilStyles.lightText
                           }
                        >
                           <Date
                              dateString={date}
                           />
                        </small>
                     </li>
                  )
               )}
            </ul>
         </section>
      </Layout>
   );
}

export default Home;
