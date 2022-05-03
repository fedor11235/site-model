import { 
    Stack,
    TextField,
    Autocomplete
} from "@mui/material"

import { useState } from "react"

export const MuiAutocomplete = () => {
    // const [acceptTnC, setAcceptTnC] = useState(false)
    const [value, setValue] = useState(null)
    const [skill, setSkill] = useState(null)
    console.log(skill)

    const skills = ["HTML", "React", "CSS", "JavaScript", "TypeScript"]
    const skillsOption = skills.map((skill, index)=>({
        id: index + 1,
        label: skill
    }))
    return(
        <Stack spacing={2} width="250px">
            <Autocomplete 
                options={skills} 
                renderInput={params => <TextField {...params} label="Skills"/>}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                freeSolo
            />
            <Autocomplete 
                options={skillsOption} 
                renderInput={params => <TextField {...params} label="Skills"/>}
                value={skill}
                onChange={(event, newValue) => setSkill(newValue)}
            />
        </Stack>
    )
}