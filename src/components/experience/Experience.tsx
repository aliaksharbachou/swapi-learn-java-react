import { Typography } from '@mui/material';

const timeExpirience = [
  {
    id: 1,
    data: 'July 2022 - Present',
    profession: 'Java Developer',
    projects: 'Create app for investigation company',
  },
];

function Experience(): JSX.Element {
  const content = timeExpirience.map((post) => (
    <div key={post.data}>
      <h3>
        {' '}
        {post.data }
        {': '}
        {post.profession}
      </h3>
      <h4>
        Last projects:
        {' '}
        {post.projects}
      </h4>
    </div>
  ));

  return (
    <Typography>

      <hr />
      <h3 style={{
        color: 'red',
        fontFamily: 'unset',
        fontSize: '1.5rem',
        backgroundColor: '#A3C1B9',
      }}
      >
        Work Experience
      </h3>
      <Typography sx={{
        color: 'black',
        textAlign: 'left',
        fontSize: '0.9rem',
        fontFamily: 'inherit',
      }}
      >

        {' '}
        {content}

      </Typography>

    </Typography>
  );
}

export default Experience;
