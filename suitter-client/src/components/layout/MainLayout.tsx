import { css } from '@emotion/react';
import { SideNav } from './SideNav';
import { Feed } from '../../features/posts/components/PostList';

export const Main = () => {
  return (
    <div className="Main">
      <div css={containerStyle}>
        <SideNav></SideNav>
        <div css={{ width: '60%' }}>
          ホーム
          <Feed></Feed>
        </div>
      </div>
    </div>
  );
};

const containerStyle = css({
  display: 'flex',
  justifyContent: 'center',
});
