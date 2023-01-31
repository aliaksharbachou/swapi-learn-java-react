import Typography from '@mui/material/Typography';

const skills = [
  {
    language: 'Java',
    discription: 'Java EE, Java SE, Spring Framework',
  },
  {
    language: 'JavaScript',
    discription: 'React js',
  },
];
function MainSkills(): JSX.Element {
  const content = skills.map((post) => (
    <div key={post.language}>
      <h3>
        {' '}
        {post.language }
        {': '}
        {post.discription}

      </h3>
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
        Technical Skills
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

export default MainSkills;
