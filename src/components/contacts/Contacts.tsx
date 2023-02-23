import { Link, Typography } from '@mui/material';

import { ContactBox, StyledImage, TypograhyDisplayContact } from './ContactsStyled';

const links = [
  {
    id: 1,
    icon: 'gmail',
    title: 'Gmail',
    email: 'mailto:faciorys@gmail.com',
  },
  {
    id: 2,
    icon: 'github',
    title: 'GitHub',
    email: 'https://github.com/aliaksharbachou',
  },
  {
    id: 3,
    icon: 'linkedin',
    title: 'LinkedIn',
    email: 'https://linkedin.com/aliaksandr-harbachou',
  },
];

function Contacts():JSX.Element {
  return (
    <ContactBox>
      <TypograhyDisplayContact
        variant="subtitle2"
      >
        {links.map((link) => (
          <Typography variant="subtitle2">
            <StyledImage
              src={`static/icon/${link.icon}.png`}
              alt="icon"
            />
            <Link href={link.email} target="_blanck">
              {link.title}
            </Link>
          </Typography>
        ))}
      </TypograhyDisplayContact>
    </ContactBox>
  );
}
export default Contacts;
