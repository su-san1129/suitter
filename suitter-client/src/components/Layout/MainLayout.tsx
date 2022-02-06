import { css } from '@emotion/react';
import { UserIcon } from '../../features/users/components/UserIcon';
import homeIcon from 'assets/home.svg';
import profileIcon from 'assets/user-regular.svg';

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

const SideNav = () => {
  return (
    <header className="SideNav" css={sideNavContainerStyle}>
      <h1>Suitter</h1>
      <nav>
        <li css={listStyle}>
          <img src={homeIcon} css={navIcon} alt="" />
          <div>
            <a href="#">ホーム</a>
          </div>
        </li>
        <li css={listStyle}>
          <img src={profileIcon} css={navIcon} alt="" />
          <div>
            <a href="#">プロフィール</a>
          </div>
        </li>
      </nav>
      <UserIcon></UserIcon>
    </header>
  );
};

const sideNavContainerStyle = css({
  width: '275px',
});

const listStyle = css({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0',
});

const navIcon = css({
  width: '25px',
  height: '25px',
  marginRight: '8px',
});
