import { Main } from './components/Layout/MainLayout';
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
  margin: '0 64px',
});

export default App;
