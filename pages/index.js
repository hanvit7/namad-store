import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import withLayrout from '../lib/withLayout';

const Index = () => (
    <div>
        <Head>
            <title>Home | Nomad Store</title>
        </Head>
        <h1>hello form the index</h1>
    </div>
);

export default withLayrout(Index);
