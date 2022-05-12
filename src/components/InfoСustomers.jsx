import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, MobileStepper, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"


export const InfoСustomers = () => {
    const [expanded, setExpended] = useState(false)
    const handleChange = (isExpanded, panel) => {
        setExpended(isExpanded ? panel : false)
    }

    return (
        <Stack direction="row" >
            <Stack color="secondary" justifyContent="center" sx={{ height: '100vh' }}>
                <Box
                    component="img"
                    sx={{
                        display: 'block',

                        overflow: 'hidden',
                        width: '200%',
                    }}
                    src={require('../assets/photo1.jpg')}
                />
            </Stack>
            <Stack color="secondary" alignItems="center" justifyContent="center" sx={{ bgcolor: "#FED6BC", maxWidth: "50%" }}>
                <Typography align="center" sx={{ px: 10 }} variant="h3">
                    Клиентам
                </Typography>
                <Typography align="center" sx={{ px: 10, pt: 10 }} variant="h4">
                    может предложить больше, чем пустые обещания, станьте нашимим первыми клиентами, будите круто!!!
                </Typography>
                <Button sx={{ width: '50vh' }} variant="outlined">Подат как клиент</Button>
            </Stack>
        </Stack>
    );
}