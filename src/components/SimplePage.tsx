import Counter from './counter';
import SimpleAccordion from './my-accordion';

const title = 'Hello Title!' as const;

function SimplePage(): JSX.Element {
  return (
    <>
      <Counter title={title} />
      <SimpleAccordion />
    </>
  );
}

export default SimplePage;
