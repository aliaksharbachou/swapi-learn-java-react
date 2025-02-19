import { Avatar, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const links = [
  {
    id: 1,
    icon: './src/components/resources/icons/gmail.png',
    title: 'Email',
    link: 'mailto:faciorys@gmail.com',
  },
  {
    id: 2,
    icon: './src/components/resources/icons/github.png',
    title: 'GitHub',
    link: 'https://github.com/aliaksharbachou',
  },
  {
    id: 3,
    icon: './src/components/resources/icons/linkedin.png',
    title: 'LinkedIn',
    link: 'https://linkedin.com/aliaksandr-harbachou',
  },
];
function UserLink(): JSX.Element {
  const content = links.map((post) => (
    <div key={post.id}>
      <h3>
        <img src={post.icon} width="28" height="28" alt="icon" />
        {' '}
        {post.title }
        {': '}
        <a href={post.link}>
          {post.link}
        </a>
      </h3>
    </div>
  ));
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Avatar
          alt="Aliaksandr Harbachou"
          src="./src/components/resources/avatar/image-10-01-22-12-10.jpeg"
          sx={{
            width: 150,
            height: 150,
          }}
        />
        <Grid item xs={12} md={8}>
          {content}
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserLink;
