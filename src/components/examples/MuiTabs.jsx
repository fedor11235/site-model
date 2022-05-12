import { Tab, Box } from "@mui/material"
import {
    TabContext, 
    TabList,
    TabPanel,
} 
from "@mui/lab"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useState } from "react"

export const MuiTabs = () => {
    const [value, setValue] = useState(false)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return(

        <Box>
            <TabContext value={value}>
                <Box sx={{borderBottom:1, borderColor:"divider", width: "300px"}}>
                    <TabList 
                        sria-lavel="Tabs exemples" 
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        centered
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab 
                            label="Tab One" 
                            value="1" 
                            icon={<FavoriteIcon />}
                            iconPosition="start"
                        />
                        <Tab label="Tab Two" value="2"/>
                        <Tab label="Tab Three" value="3"/>
                        <Tab label="Tab Four" value="4"/>
                        <Tab label="Tab Five" value="5"/>
                        <Tab label="Tab Six" value="6"/>
                    </TabList>
                </Box>
                <TabPanel value="1">Tab One</TabPanel>
                <TabPanel value="2">Tab Two</TabPanel>
                <TabPanel value="3">Tab Three</TabPanel>
                <TabPanel value="4">Tab Four</TabPanel>
                <TabPanel value="5">Tab Five</TabPanel>
                <TabPanel value="6">Tab Six</TabPanel>
            </TabContext>
        </Box>
    )
}