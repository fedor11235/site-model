import { 
    Box, 
    Checkbox,
    FormControl, 
    FormLabel,
    FormGroup, 
    FormControlLabel, 
    FormHelperText,
} from "@mui/material"
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import BookmarkIcon from "@mui/icons-material/Bookmark"

import { useState } from "react"

export const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState([])

    const handleFormatChange = (event) => {
        setAcceptTnC(event.target.checked)
    }
    const handleSkillChange = (event) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
    return(
        <Box>
            <Box>
                <FormControlLabel 
                    label="I accept terms and coditions" 
                    control={
                        <Checkbox 
                            size="small"
                            color="secondary"
                            checked={acceptTnC} 
                            onChange={handleFormatChange}
                        />}
                />
            </Box>

            <Box>
                <Checkbox 
                    icon={<BookMarkBorderIcon/>}
                    checkedIcon={<BookmarkIcon/>}
                    label="I accept terms and coditions" 
                    checked={acceptTnC} 
                    onChange={handleFormatChange}
                />
            </Box>

            <Box>
                <FormControl  error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel 
                            label="HTML" 
                            control={
                                <Checkbox 
                                    value="html"
                                    checked={skills.includes("html")} 
                                    onChange={handleSkillChange}
                                />}
                        />
                        <FormControlLabel 
                            label="CSS" 
                            value="css"
                            control={
                                <Checkbox 
                                    checked={skills.includes("css")} 
                                    onChange={handleSkillChange}
                                />}
                        />
                        <FormControlLabel 
                            label="JavaScript" 
                            value="javascript" 
                            control={
                            <Checkbox 
                                checked={skills.includes("javascript")} 
                                onChange={handleSkillChange}
                            />}
                        />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}