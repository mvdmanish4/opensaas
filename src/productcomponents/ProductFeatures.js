import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
  {
    name: 'AFFiNE',
    index: '0',
    productFeatures:[
        {
          icon: <ViewQuiltRoundedIcon />,
          title: 'Create and Manage Docs',
          name: 'GitHub',
          description:
            'This item could provide a snapshot of the most important metrics or data points related to the product.',
          imageLight: 'url("/affine/affinedocs.png")',
          imageDark: 'url("/affine/affinedocs.png")',
        },
        {
          icon: <EdgesensorHighRoundedIcon />,
          title: 'Brainstrom using whiteboards',
          name: 'Community',
          description:
            'This item could provide information about the mobile app version of the product.',
          imageLight: 'url("/affine/affineboard.png")',
          imageDark: 'url("/affine/affineboard.png")',
        },
        {
          icon: <DevicesRoundedIcon />,
          title: 'Create journals and track acitivity daily',
          name: 'Documentation',
          description:
            'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
          imageLight: 'url("/affine/affinejournal.png")',
          imageDark: 'url("/affine/affinejournal.png")',
        },
    ]
 },
 {
  name: 'Penpot',
  index: '1',
  productFeatures:[
      {
        icon: <ViewQuiltRoundedIcon />,
        title: 'Design - Add, filter, sort, edit and track customers',
        name: 'GitHub',
        description:
          'This item could provide a snapshot of the most important metrics or data points related to the product.',
        imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
      },
      {
        icon: <EdgesensorHighRoundedIcon />,
        title: 'Design - Create one or several opportunities for each company',
        name: 'Community',
        description:
          'This item could provide information about the mobile app version of the product.',
        imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
      },
      {
        icon: <DevicesRoundedIcon />,
        title: 'Design - Track deals effortlessly with the email integration',
        name: 'Documentation',
        description:
          'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
        imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
      },
  ]
}
];


export default function ProductFeatures({testimonialIndex}) {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedTitems = items[parseInt(testimonialIndex, 10)];
  const selectedFeature = selectedTitems.productFeatures[selectedItemIndex];


  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Product features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              The need for a CRM platform that empowers rather than constrains. We believe the next great CRM will come from the open source community. And we’ve packed Twenty with powerful features to give you full control and help you run your business efficiently.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {selectedTitems.productFeatures.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? selectedTitems.productFeatures[selectedItemIndex].imageLight
                    : selectedTitems.productFeatures[selectedItemIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {selectedTitems.productFeatures.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? selectedTitems.productFeatures[selectedItemIndex].imageLight
                    : selectedTitems.productFeatures[selectedItemIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
      <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#FFFFFF',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid container spacing={2.5}>
          {selectedTitems.productFeatures.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  background: 'transparent',
                }}
              >
                <div>
                  <Typography fontWeight="medium" color="text.primary" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </Container>
  );
}
