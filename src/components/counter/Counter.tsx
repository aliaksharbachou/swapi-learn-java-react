import { useState } from 'react';

import { Button, Typography } from '@mui/material';

interface CounterProps {
  title: string
}

const me = {
  name: 'Alex',
  surname: 'A',
};

function Counter(props: CounterProps): JSX.Element {
  const { title } = props;

  const [meState, setMeState] = useState<typeof me>(me);

  const clickHandle = (): void => {
    setMeState({
      name: 'Vasya',
      surname: 'B',
    });
  };

  const dropCountHandle = (): void => {
    setMeState(me);
  };

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {`${title} ${meState.name} ${meState.surname}`}
      </Typography>
      <Button onClick={clickHandle} variant="contained">Click</Button>
      <Button onClick={dropCountHandle} variant="contained">Drop count</Button>
    </>
  );
}

export default Counter;
