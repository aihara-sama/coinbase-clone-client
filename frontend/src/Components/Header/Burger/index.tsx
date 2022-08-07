import { Dialog, Slide } from '@mui/material';
import Hamburger from 'hamburger-react';
import React, { FunctionComponent, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';

const StyledDialog = styled(Dialog)`
  top: 48px;
`;

const Burger: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~
  const theme = useTheme();

  // ~~~~~ Cmp state ~~~~~
  const [open, setOpen] = useState(false);

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <>
      <Hamburger
        color={theme.palette.black['900']}
        toggled={open}
        toggle={setOpen}
      />
      <StyledDialog
        TransitionComponent={Slide}
        open={open}
        fullScreen
      ></StyledDialog>
    </>
  );
};

export default Burger;
