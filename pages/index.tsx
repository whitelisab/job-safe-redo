import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import MyJobs from '../components/myjobs';
import { Container } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Job Seeker Safe</title>
      </Head>
      <Container className="md-container">
        <MyJobs />
      </Container>
    </Layout>
  );
};

export default Home;
