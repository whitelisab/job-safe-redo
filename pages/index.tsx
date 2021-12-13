import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { Container, Row, Card, Button } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Job Seeker Safe</title>
      </Head>
      <Container className="md-container">
        <div>Job seeker safe home page</div>
        <div>
          <Link href="/jobboard">
            <a>Click here for Job Board</a>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
