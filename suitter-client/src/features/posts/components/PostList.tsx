import userIcon from 'assets/user-regular.svg';
import repostIcon from 'assets/repost.svg';
import replyIcon from 'assets/comment-dots-regular.svg';
import favoriteIcon from 'assets/heart-regular.svg';
import { css } from '@emotion/react';
import { colorStyles, icon__middle, icon__tiny } from '../../../styles/styles';
import { usePosts } from '../api/getPosts';

export const Feed = () => {
  const useQuery = usePosts();
  if (useQuery.isLoading) {
    return <div>loading...</div>;
  }

  if (!useQuery.data) return null;
  console.log(useQuery.data);
  const posts = useQuery.data.posts;

  return (
    <>
      <div className="Feed" css={{ margin: '8px 0' }}>
        <ul>
          {posts &&
            posts.map((post, index) => (
              <li key={post.id}>
                <div
                  css={[containerStyle, posts.length - 1 === index ? listBorder__last : listBorder]}
                >
                  <img src={userIcon} alt="ユーザー画像" css={userIconStyle} />
                  <div>
                    <div css={{ width: '476px' }}>
                      <span css={{ fontWeight: '700', marginRight: '4px', fontSize: '16px' }}>
                        {post.user.name}
                      </span>
                      <span
                        css={{
                          color: '#6e767d',
                          fontSize: '14px',
                        }}
                      >
                        @{post.user.id}
                      </span>
                    </div>
                    <div css={{ fontSize: '16px' }}>{post.content}</div>
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
    </>
  );
};

const containerStyle = css({
  display: 'flex',
  alignItems: 'flex-start',
  width: '520px',
  padding: '12px 24px',
  ':hover': {
    backgroundColor: colorStyles.HOVER_COLOR_PRIMARY,
    cursor: 'pointer',
  },
});

const listBorder = css({
  borderTop: `1px solid ${colorStyles.BORDER_COLOR}`,
  borderLeft: `1px solid ${colorStyles.BORDER_COLOR}`,
  borderRight: `1px solid ${colorStyles.BORDER_COLOR}`,
});

const listBorder__last = css(listBorder, {
  borderBottom: `1px solid ${colorStyles.BORDER_COLOR}`,
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
    backgroundColor: colorStyles.HOVER_COLOR_SECONDARY,
  },
});

const iconStyle = css(icon__tiny, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  margin: 'auto',
  zIndex: '1',
});
