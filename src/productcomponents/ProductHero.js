import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const productDetails = [
  {
    name: 'AFFiNE',
    index: '0',
    occupation: 'Senior Engineer',
    image: 'url("/affine/affinehome.png")',
    testimonial:
      "AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",
  },
  {
    name: 'Rocket Chat',
    index: '1',
    occupation: 'Lead Product Designer',
    image: 'url("/twentycrm/twentydataexplore.png")',
    testimonial:
      "An omnichannel platform made for team collaboration and customer service. It enables real-time conversations between colleagues, with other companies or with your customers.",
  },
  {
    name: 'Penpot',
    index: '2',
    occupation: 'CTO',
    image: 'url("/twentycrm/twentydataexplore.png")',
    testimonial:
      'Penpot is a design and code collaboration tool. Designers can create stunning designs, interactive prototypes, design systems at scale, while developers enjoy ready-to-use code.',
  },
];

export default function ProductHero({testimonialIndex}) {

  const testimonialIndexStr = String(testimonialIndex);

  // Find the product that matches the testimonialIndex
  const matchedProduct = productDetails.find(product => product.index === testimonialIndexStr);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            {matchedProduct.name}
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            {matchedProduct.testimonial}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="primary" onClick={() => window.open('http://www.opensaasaffine.theopensaas.com:3010/workspace/WTv0Usd2UAPhV0TUiKytl/AErreQ2crov6XUCAj0vyF', '_blank')}>
              Free Trail
            </Button>
            <Button variant="contained" color="primary">
              Deploy to AWS
            </Button>
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 100, sm: 500 },
            width: '80%',
            backgroundImage: 'url("/affine/affinehome.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
