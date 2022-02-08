import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { colorStyles } from '../../../styles/styles';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button css={buttonStyle} {...props} />;
};

const buttonStyle = css({
  width: '80px',
  height: '30px',
  backgroundColor: colorStyles.PRIMARY,
  color: '#FFF',
  fontWeight: '700',
  borderRadius: '12px',
});
