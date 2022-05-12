import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, Stack, MobileStepper, Typography, Grid, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"


export const InfoСlients = () => {
    const [expanded, setExpended] = useState(false)
    const handleChange =(isExpanded, panel)=>{
        setExpended(isExpanded ? panel: false)
    }

  return (
    <Stack direction="row" >
        <Stack color ="secondary" justifyContent="center" sx={{height: '50vh'}}>
            <Typography align="center" sx={{ px: 10 }} variant="h3">
                Руководство
            </Typography>
            <Typography align="center" sx={{ px: 10, pt:10 }} variant="h4">
                Первые шаги вхождения в модельный бизнес
            </Typography>
        </Stack>
        <Stack color ="secondary" justifyContent="center"  sx={{ height: '50vh', maxWidth: "50%" }}>

            <Accordion expanded={expanded==="panel1"} onChange={(event, isExpanded)=>handleChange(isExpanded, "panel1")}>
                <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h4">Как стать моделью</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, 
                        but the title provides its own additional styles. 
                        The title and body will stack on top of each other on account of the literal newlines
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded==="panel2"} onChange={(event, isExpanded)=>handleChange(isExpanded, "panel2")}>
                <AccordionSummary
                    id="panel2-header"
                    aria-controls="panel2-content"
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h4">Наш сервис ваши преймущества</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, 
                        but the title provides its own additional styles. 
                        The title and body will stack on top of each other on account of the literal newlines
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded==="panel3"} onChange={(event, isExpanded)=>handleChange(isExpanded, "panel3")}>
                <AccordionSummary
                    id="panel3-header"
                    aria-controls="panel3-content"
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h4">Наш сервис ваши преймущества</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, 
                        but the title provides its own additional styles. 
                        The title and body will stack on top of each other on account of the literal newlines
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Stack>
    </Stack>
  );
}