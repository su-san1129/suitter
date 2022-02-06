import { UserIcon } from '../../features/users/components/UserIcon';
import homeIcon from 'assets/home.svg';
import profileIcon from 'assets/user-regular.svg';
import { css } from '@emotion/react';

export const SideNav = () => {
  const navList = [
    { label: 'ホーム', icon: homeIcon, link: '#' },
    { label: 'プロフィール', icon: profileIcon, link: '#' },
  ];

  return (
    <header className="SideNav" css={sideNavContainerStyle}>
      <h1>Suitter</h1>
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
  marginRight: '16px',
});
