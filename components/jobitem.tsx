import { Job } from '../sampleData';

const JobItem = ({ job }: { job: Job }) => {
  return (
    <tr>
      <td>
        <a href={job.url} target="blank">
          {job.title}
        </a>
      </td>
      <td>{job.company}</td>
      <td>{job.status}</td>
      <td>{job.date}</td>
    </tr>
  );
};

export default JobItem;
