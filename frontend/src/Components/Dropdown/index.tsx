import { BoxProps, Grow, Paper, paperClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React, { FunctionComponent, useState } from 'react';
console.log({ paperClasses });

interface IProps {
  title: FunctionComponent | string;
  children: JSX.Element;
}

const StyledPaper = styled(Paper)`
  position: absolute;
  right: 0;
  left: 0;
`;

const Dropdown: FunctionComponent<IProps> = ({ children, title }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [open, setOpen] = useState(false);

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <Box
      onMouseEnter={(e) => setOpen(true)}
      onMouseLeave={(e) => setOpen(false)}
    >
      <>
        {title}
        <Grow in={open}>{<StyledPaper>{children}</StyledPaper>}</Grow>
      </>
    </Box>
  );
};

export default Dropdown;
