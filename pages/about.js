import Head from 'next/head';
import Link from 'next/link';
import withLayrout from '../lib/withLayout';

const About = () => (
    <div>
        <Head>
            <title>About | Nomad Store</title>
        </Head>
        <h1>hello form the about</h1>
    </div>
);

export default withLayrout(About);
