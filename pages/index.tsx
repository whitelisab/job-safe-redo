import Head from 'next/head';
import Layout from '../components/layout';
import MyJobs from '../components/myjobs';
import { Container } from 'react-bootstrap';
import sampleData, { Jobs } from '../sampleData';
import { GetStaticProps } from 'next';

const Home = ({ jobs }: { jobs: Jobs }) => {
  return (
    <Layout>
      <Head>
        <title>Job Seeker Safe</title>
      </Head>
      <Container className="md-container">
        <MyJobs jobs={jobs} />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      jobs: sampleData
    }
  };
};

export default Home;
