import { css } from '@emotion/react';

export const colorStyles = {
  HOVER_COLOR_PRIMARY: '#f9f9f9',
  HOVER_COLOR_SECONDARY: '#e9e9e9',
  BORDER_COLOR: '#eff3f4',
} as const;

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
