import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface IUseInput {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  }

function useInput(initial: string): IUseInput {
  const [value, setValue] = useState<string>(initial);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}
export default useInput;
