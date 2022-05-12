import { 
    Accordion, 
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@mui/material"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"

export const MuiAccordion = () => {
    const [expanded, setExpended] = useState(false)
    const handleChange =(isExpanded, panel)=>{
        setExpended(isExpanded ? panel: false)
    }

    return(
        <>
            <Accordion expanded={expanded==="panel1"} onChange={(event, isExpanded)=>handleChange(isExpanded, "panel1")}>
                <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 1</Typography>
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
                    <Typography>Accordion 2</Typography>
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
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, 
                        but the title provides its own additional styles. 
                        The title and body will stack on top of each other on account of the literal newlines
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}