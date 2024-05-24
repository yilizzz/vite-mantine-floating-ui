import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import { rem } from 'polished';
// import Image from '../images/Image';
// import Box from '../layout/Box/Box';
import { Group, Center, Stack } from '@mantine/core';
import logo from '@/assets/footerLOGO.svg';
import band from '@/assets/footerBand.svg';
import Text from '@/components/typographies/text/text';

const StNavFooter = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#651022',
  height: rem(250),
  paddingTop: rem(20),
  flexShrink: 0,
  color: '#ffffff',
  fontFamily: 'Roboto',
  fontSize: rem(16),
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: rem(1),
  textTransform: 'uppercase',
  width: '100%',

  //   '@media (min-width: 1024px)': {
  //     height: rem(120),
  //     flexDirection: 'row',
  //     paddingTop: '0',
  //   },
});

function Footer() {
  return (
    <StNavFooter>
      <div>
        <Image src={logo} alt="logo"></Image>
        <Image src={band} alt=""></Image>
      </div>
      <Stack>
        <Text variant="item">Accès à la plateforme</Text>
        <Text variant="item">Nos solutions</Text>
        <Text variant="item">Nos références</Text>
        <Text variant="item">Nous découvrir</Text>
        <Text variant="item">Recrutement</Text>
        <Text variant="item">Actus</Text>
        <Text variant="item">Contactez-nous</Text>
      </Stack>
      <Stack></Stack>
    </StNavFooter>
  );
}

export default Footer;
