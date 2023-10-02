import { useContext } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SearchIcon from '@mui/icons-material/Search'
import { PokeContext } from "../../Context";

export default function TabSwitcher() {
    const context = useContext(PokeContext)

    const handleChange = (e, newMain) => {
        context.setMain(newMain)
    }

    return (
        <>
            <Box>
                <Tabs value={context.main} onChange={handleChange} centered>
                    <Tab iconPosition="start" icon={<AutoAwesomeIcon fontSize="small" />} label="Explore" value={1} />
                    <Tab iconPosition="start" icon={<SearchIcon fontSize="small" />} label="Find" value={2} />
                </Tabs>
            </Box>
        </>
    )
}