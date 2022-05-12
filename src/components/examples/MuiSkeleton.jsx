import {
    Stack,
    Skeleton,
    Box,
    Avatar,
    Typography
} from "@mui/material"

import { useEffect, useState } from "react"

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])
    return(
      <>
        <Stack spacing={1} width="250px">
            <Skeleton variant="text" animation={false}/>
            <Skeleton variant="circular" width={40} height={40} animation="wave"/>
            <Skeleton variant="rectangular" width={250} height={125}/>
        </Stack>

        <Box sx={{width: "250px", marginTop:"12px"}}>
            {loading?(
                <Skeleton 
                    variant="rectangular" 
                    width={256} 
                    height={144} 
                />
                ) : (
                    <img 
                        src="https://i.pinimg.com/originals/fd/90/e9/fd90e9b886f83f6717eb8a932fbf1eb6.jpg" 
                        alt="skeleton"
                        width={256}
                        height={144}
                    />
                )}
        </Box>
        <Stack 
            direction="row"
            spacing={1} 
            sx={{width:"100%", marginTop:"12px"}}
        >
            {loading?(
                <Skeleton 
                    variant="circular" 
                    width={40} 
                    height={40} 
                    animation="wave"
                />
                ) : (
                    <Avatar>V</Avatar>
                )}
        </Stack>
        <Stack 
            sx={{width:"80%", marginTop:"12px"}}
        >
            {loading?(
                <>
                    <Typography variant="body1">
                        <Skeleton variant="text" width="100%" animation="wave"/>
                    </Typography>
                    <Typography variant="body2">
                        <Skeleton variant="text" width="100%" animation="wave"/>
                    </Typography>
                </>
                ) : (
                    <>
                        <Typography variant="body1">React MUI Tutorial</Typography>
                    </>
                )}
        </Stack>
      </>
    )
}