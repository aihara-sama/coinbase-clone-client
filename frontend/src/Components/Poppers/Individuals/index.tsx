import { Link as MuiLink, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ICard {
  image: string;
  title: string;
  subtitle: string;
  link: string;
  tooltip: string;
}

const cards: ICard[] = [
  {
    image: 'crypto',
    link: '/register',
    subtitle: 'Buy, sell and use crypto',
    title: 'Buy and Sell',
    tooltip: 'Sign up for Coinbase',
  },
  {
    image: 'earn',
    link: '/learning-rewards',
    subtitle: 'Learn and earn crypto',
    title: 'Learning rewards',
    tooltip: 'Coinbase learning rewards - Learn about crypto and get rewards',
  },
  {
    image: 'private-client',
    link: '/private-client',
    subtitle: 'For trusts, family offices, UHNWIs',
    title: 'Private Client',
    tooltip: 'Coinbase Private Client - For trusts, family offices, and UHNWIs',
  },
  {
    image: 'NFT',
    link: '/#',
    subtitle: 'Create, collect, connect',
    title: 'NFT',
    tooltip: 'Create, collect, connect',
  },
  {
    image: 'wallet',
    link: '/wallet',
    subtitle: 'The best self-hosted crypto wallet',
    title: 'Wallet',
    tooltip: 'Coinbase Wallet - Store your cryptocurrency',
  },
  {
    image: 'card',
    link: '/card',
    subtitle: 'Spend crypto, earn crypto rewards',
    title: 'Card',
    tooltip: 'Coinbase Card - Spend crypto anywhere',
  },
  {
    image: 'borrow',
    link: '/borrow',
    subtitle: 'Borrow cash using Bitcoin as collateral',
    title: 'Borrow',
    tooltip: 'Coinbase Borrow - Borrow cash using Bitcoin as collateral',
  },
  {
    image: 'derivatives',
    link: '/derivatives',
    subtitle: 'Trade an accessible futures market',
    title: 'Derivatives',
    tooltip: 'Trade an accessible futures market',
  },
];

const Individuals: FunctionComponent = () => {
  return (
    <Box display={'flex'} justifyContent="center">
      <List>
        {cards.map((card, idx) => (
          <ListItem key={idx} variant="card" title={card.tooltip}>
            <MuiLink
              component={Link}
              to={card.link}
              display="flex"
              alignItems={'center'}
            >
              <Box mr={1.5}>
                <img width={30} src={`/assets/images/svg/${card.image}.svg`} />
              </Box>
              <ListItemText
                primary={card.title}
                secondary={card.subtitle}
              ></ListItemText>
            </MuiLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Individuals;
