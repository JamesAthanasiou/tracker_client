import { useNavigate } from "@tanstack/react-router";
import Person from "../types/Person";
import { Box, Button, Grid2 as Grid } from "@mui/material";

type PersonProps =  {
    index: number;
    person: Person,
}

export default function PersonLine({person, index}: PersonProps) {

    const navigate = useNavigate()

    async function handleClick(){  
        
        navigate({
            to: `/person/${person.id}`,
        });
    }

    function getBackgroundColor(index :number): string {
        return index % 2 == 0 ? 'primary.main' : 'secondary.main';
    }

    return (
        <Box sx={{ flexGrow: 1, p:1, backgroundColor:getBackgroundColor(index) }}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    {person.first_name} 
                </Grid>
                <Grid size={4} container justifyContent="flex-end">
                    <Button variant="contained" onClick={handleClick}>view</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
