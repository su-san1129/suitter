import {Main} from './components/layout/MainLayout';
import {css} from '@emotion/react';
import {queryClient} from "./lib/react-query";
import {QueryClientProvider} from "react-query";

function App() {
  return (
      <div className="App" css={styles}>
        <QueryClientProvider client={queryClient}>
          <header className="App-header">
            <Main></Main>
          </header>
        </QueryClientProvider>
      </div>
  );
}

const styles = css({
  margin: '32px 64px',
});

export default App;
