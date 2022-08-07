import { FunctionComponent } from 'react';
import { Button as MuiButton, styled } from '@mui/material';

interface IProps {
  variant?: 'text' | 'contained' | 'outlined';
  size?: number;
  text: string;
}

const StyledButton = styled(MuiButton)`
  padding: 18px 48px;
`;

const Button: FunctionComponent<IProps> = ({ text, variant = 'contained' }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return <StyledButton variant={variant}>{text}</StyledButton>;
};

export default Button;
