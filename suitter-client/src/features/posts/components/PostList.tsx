import { getPosts } from '../api/getPosts';
import userIcon from 'assets/user-regular.svg';
import repostIcon from 'assets/repost.svg';
import replyIcon from 'assets/comment-dots-regular.svg';
import favoriteIcon from 'assets/heart-regular.svg';
import { css } from '@emotion/react';
import { icon__middle, icon__tiny } from '../../../styles/styles';

export const Feed = () => {
  const posts = getPosts();

  return (
    <div className="Feed">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div css={containerStyle}>
              <img src={userIcon} alt="ユーザー画像" css={userIconStyle} />
              <div>
                <div css={{ width: '464px' }}>
                  <span css={{ fontWeight: '700' }}>{post.user.name}</span>
                  <span
                    css={{
                      color: '#6e767d',
                      fontSize: '16px',
                    }}
                  >
                    @{post.user.id}
                  </span>
                </div>
                <div>{post.content}</div>
                <div className="OperationIcons" css={operationMenuStyle}>
                  <div css={iconWrapperStyle}>
                    <img src={replyIcon} alt="返信" css={iconStyle} />
                  </div>
                  <div css={iconWrapperStyle}>
                    <img src={repostIcon} alt="拡散" css={iconStyle} />
                  </div>
                  <div css={iconWrapperStyle}>
                    <img src={favoriteIcon} alt="お気に入り" css={iconStyle} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const containerStyle = css({
  display: 'flex',
  alignItems: 'center',
  width: '520px',
  padding: '8px 16px',
  borderTop: '1px solid #eff3f4',
  borderLeft: '1px solid #eff3f4',
  borderRight: '1px solid #eff3f4',
  ':hover': {
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
  },
});

const operationMenuStyle = css({
  display: 'flex',
  width: '80%',
  marginLeft: '-8px',
  justifyContent: 'space-between',
});

const userIconStyle = css(icon__middle, {
  marginRight: '16px',
});

const iconWrapperStyle = css({
  position: 'relative',
  width: '40px',
  height: '40px',
  borderRadius: '20px',
  ':hover': {
    backgroundColor: '#e9e9e9',
  },
});

const iconStyle = css(icon__tiny, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  margin: 'auto',
});
