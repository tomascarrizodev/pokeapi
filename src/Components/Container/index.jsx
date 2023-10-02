import Box from '@mui/material/Box';
import Header from '../Header';
import TabSwitcher from '../TabSwicther';

export default function Container () {
    return (
        <>
            <Box>
                <Header />
                <TabSwitcher />
                <body>Cartas random</body>
            </Box>
        </>
    )
}