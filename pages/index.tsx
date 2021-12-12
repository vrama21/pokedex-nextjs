import { ReactElement } from 'react';
import { PageLayout } from 'layouts';

const App = () => {
  return <div ></div>;
};

App.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default App;
