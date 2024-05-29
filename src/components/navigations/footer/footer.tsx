import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import { rem } from 'polished';
// import Image from '../images/Image';
// import Box from '../layout/Box/Box';
import { Group, Center, Stack } from '@mantine/core';
import logo from '@/assets/footerLOGO.svg';
import band from '@/assets/footerBand.svg';

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
        {/* <Image src={logo} alt="logo"></Image>
        <Image src={band} alt=""></Image> */}
      </div>
      <Stack>
        <p>Accès à la plateforme</p>
        <p>Nos solutions</p>
        <p>Nos références</p>
        <p>Nous découvrir</p>
        <p>Recrutement</p>
        <p>Actus</p>
        <p>Contactez-nous</p>
      </Stack>
      <Stack></Stack>
      <Stack></Stack>
    </StNavFooter>
  );
}

export default Footer;
