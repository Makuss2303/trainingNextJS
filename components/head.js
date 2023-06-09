import Head from "next/head";
export default function HeadSection(props) {
  return (
    <Head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
