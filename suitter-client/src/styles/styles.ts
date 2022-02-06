import { css } from '@emotion/react';

const icon = css({
  borderRadius: '24px',
  objectFit: 'fill',
});

export const icon__tiny = css({
  width: '20px',
  height: '20px',
});

export const icon__small = css(icon, {
  width: '24px',
  height: '24px',
});

export const icon__middle = css(icon, {
  width: '40px',
  height: '40px',
});
