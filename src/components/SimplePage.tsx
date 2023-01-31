import About from './about/About';
import UserLink from './counter/UserLink';
import Experience from './experience/Experience';
import MainSkills from './skills/MainSkills';
import Counter from './counter';

function SimplePage(): JSX.Element {
  return (
    <>
      <Counter />
      <UserLink />
      <About />
      <MainSkills />
      <Experience />
    </>
  );
}

export default SimplePage;
