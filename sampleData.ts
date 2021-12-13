export type Jobs = {
  title: string,
  company: string,
  status: string,
  date: string,
  url: string,
  id: number
}[];

export type Job = {
  title: string,
  company: string,
  status: string,
  date: string,
  url: string,
  id: number
}

const sampleData = [
  {
    id: 1,
    user_id: 1,
    title: 'Software Engineer',
    company: 'Google',
    url: 'https://www.google.com',
    status: 'applied',
    date: '11/14/2021'
  },
  {
    id: 2,
    user_id: 1,
    title: 'Full-stack Engineer',
    company: 'Netflix',
    url: 'https://www.google.com',
    status: 'rejected',
    date: '11/3/2021'
  },
  {
    id: 3,
    user_id: 1,
    title: 'Front End Engineer',
    company: 'Apple',
    url: 'https://www.google.com',
    status: 'interviewed',
    date: '12/1/2021'
  }
];

export default sampleData;
