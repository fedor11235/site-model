import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, Stack, MobileStepper, Typography, Grid} from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '../assets/photo1.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      '../assets/photo2.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      '../assets/photo3.jpg',
  },
];

export const AboutСompany = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack direction="row" sx={{ bgcolor:"#FED6BC"}} >
        <Box color ="secondary" alignItems="center">
            <Typography align="center" sx={{ px: 10, pt:10 }} variant="h3">
                О компании
            </Typography>
            <Typography align="center" sx={{ px: 10, pt:10 }} variant="h4">
                In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, 
                but the title provides its own additional styles. 
                The title and body will stack on top of each other on account of the literal newlines
            </Typography>
        </Box>
        <Box sx={{ maxWidth: "50%" }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                        display: 'block',
        
                        overflow: 'hidden',
                        width: '200%',
                        }}
                        src={require('../assets/photo1.jpg')}
                        alt={step.label}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    </Stack>
  );
}