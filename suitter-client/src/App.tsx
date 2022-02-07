import { Main } from './components/layout/MainLayout';
import { css } from '@emotion/react';

function App() {
  return (
    <div className="App" css={styles}>
      <header className="App-header">
        <Main></Main>
      </header>
    </div>
  );
}

const styles = css({
  margin: '32px 64px',
});

export default App;
