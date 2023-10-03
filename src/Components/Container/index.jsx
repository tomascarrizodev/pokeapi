import Box from '@mui/material/Box';
import Header from '../Header';
import TabSwitcher from '../TabSwicther';
import CardContainer from '../Cards/CardContainer';

export default function Container () {
    return (
        <>
            <Box>
                <Header />
                <TabSwitcher />
                <CardContainer />
            </Box>
        </>
    )
}