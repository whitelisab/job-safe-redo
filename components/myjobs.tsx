import { Container, Table, Row, Col } from 'react-bootstrap';
import { Jobs } from '../sampleData';
import JobItem from './jobitem';

const MyJobs = ({ jobs }: { jobs: Jobs }) => {
  return (
    <Container className="mt-5">
      <Row className="my-3">
        <Col>
          <h4 className="ml-2">My job applications</h4>
        </Col>
      </Row>
      <Table striped borderless hover>
        <thead>
          <tr>
            <th>Job title </th>
            <th>Company </th>
            <th>Status </th>
            <th>Date added </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <JobItem job={job} key={job.id} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyJobs;
