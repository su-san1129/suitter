import { css } from '@emotion/react';
import { SideNav } from './SideNav';

export const Main = () => {
  return (
    <div className="Main">
      <div css={containerStyle}>
        <SideNav></SideNav>
        <div css={{ width: '60%' }}>
          <ul>
            <li>sample</li>
            <li>sample</li>
            <li>sample</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const containerStyle = css({
  display: 'flex',
  justifyContent: 'center',
});
