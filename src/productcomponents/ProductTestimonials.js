import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from 'react-router-dom';



const userTestimonials = [
  {
    name: 'Twenty CRM',
    index: '0',
    quotes: [
          {
            avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
            name: 'Remy Sharp',
            occupation: 'Senior Engineer',
            testimonial:
              "CRM and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
          },
          {
            avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
            name: 'Travis Howard',
            occupation: 'Lead Product Designer',
            testimonial:
              "CRM level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
          },
          {
            avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
            name: 'Cindy Baker',
            occupation: 'CTO',
            testimonial:
              'CRM level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
          },
      ]
   },
   {
    name: 'Penpot',
    index: '1',
    quotes: [
          {
            avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
            name: 'Remy Sharp',
            occupation: 'Senior Engineer',
            testimonial:
              "Design and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
          },
          {
            avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
            name: 'Travis Howard',
            occupation: 'Lead Product Designer',
            testimonial:
              "Design level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
          },
          {
            avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
            name: 'Cindy Baker',
            occupation: 'CTO',
            testimonial:
              'Design level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
          },
      ]
   },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function ProductTestimonials({testimonialIndex}) {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;
  const navigate = useNavigate();
  const selectedTestimonialGroup = userTestimonials[parseInt(testimonialIndex, 10)];

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Community Thoughts
        </Typography>
        <Typography variant="body1" color="text.secondary">
          With open source take control of your stack. It's now as easy as using, managing and deploying SaaS products. 
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {selectedTestimonialGroup.quotes.map((quote, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', height: '100%' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                  {quote.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={quote.avatar}
                  title={quote.name}
                  titleTypographyProps={{ align: 'left' }}
                  subheader={quote.occupation}
                  subheaderTypographyProps={{ align: 'left' }} 
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
