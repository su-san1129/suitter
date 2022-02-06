import { User } from '../types';
import { getUser } from '../api/getUser';
import { css } from '@emotion/react';
import userRegularIcon from 'assets/user-regular.svg';

export const UserIcon = () => {
  const user: User = getUser();

  return (
    <div className="UserIcon">
      <div css={userIconContainerStyle}>
        <img src={userRegularIcon} css={userIconStyle} />
        <div css={userNameWrapperStyle}>
          <div>{user.name}</div>
          <div css={userIdStyle}>@{user.id}</div>
        </div>
      </div>
    </div>
  );
};

const userIconContainerStyle = css({
  display: 'flex',
  alignItems: 'center',
});

const userIconStyle = css({
  width: '25px',
  height: '25px',
  borderRadius: '20px',
  marginRight: '16px',
  objectFit: 'fill',
});

const userNameWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
});

const userIdStyle = css({
  color: '#6e767d',
  fontSize: '12px',
});
