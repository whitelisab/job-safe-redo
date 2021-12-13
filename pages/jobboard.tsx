import Link from 'next/link';
import Layout from '../components/layout';

const JobBoard = () => {
  return (
    <Layout>
      <div>Job Board</div>
      <Link href="/">
        <a>Return Home</a>
      </Link>
    </Layout>
  );
};

export default JobBoard;
