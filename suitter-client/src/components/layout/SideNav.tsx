import { UserIcon } from '../../features/users/components/UserIcon';
import homeIcon from 'assets/home.svg';
import profileIcon from 'assets/user-regular.svg';
import { css } from '@emotion/react';
import { colorStyles } from '../../styles/styles';
import { Button } from '../elements/button/Button';
import styled from '@emotion/styled';

export const SideNav = () => {
  const navList = [
    { label: 'ホーム', icon: homeIcon, link: '#' },
    { label: 'プロフィール', icon: profileIcon, link: '#' },
  ];

  return (
    <header className="SideNav" css={sideNavContainerStyle}>
      <h1 css={{ marginBottom: '32px' }}>Suitter</h1>
      <nav>
        {navList.map((nav) => (
          <li css={listStyle} key={nav.label}>
            <img src={nav.icon} css={navIcon} alt="" />
            <div>
              <a href={nav.link}>{nav.label}</a>
            </div>
          </li>
        ))}
      </nav>
      <Button
        type="submit"
        css={{
          margin: '8px 0',
          width: '80%',
          height: '40px',
          backgroundColor: '#1d9bf0',
          borderRadius: '16px',
          color: '#FFF',
          fontSize: '18px',
          fontWeight: '700',
          ':hover': {
            opacity: '0.8',
          },
        }}
      >
        投稿する
      </Button>
      <UserIcon></UserIcon>
    </header>
  );
};

const sideNavContainerStyle = css({
  width: '275px',
  padding: '16px',
});

const listStyle = css({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  ':hover': {
    backgroundColor: colorStyles.HOVER_COLOR_PRIMARY,
    cursor: 'pointer',
  },
});

const navIcon = css({
  width: '24px',
  height: '24px',
  marginRight: '16px',
});
