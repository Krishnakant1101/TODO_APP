import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { Decrement, Increment } from '../TodoCounterSlice/TodoCounterSlice';
import { useSelector, useDispatch } from 'react-redux';

function CounterApp() {
    const countValue = useSelector((state) => state.Data.count);
     // Get count value from Redux store
    const Dispatch = useDispatch();

    return (
        <>
            <Box
                sx={{
                    height: "80vh", width: "100%",
                    backgroundColor: "#0b102b", display: "flex",
                    justifyContent: "center", alignItems: 'center',
                    
                }}
            >
                <Box
                    sx={{
                        border: "1px solid wheat", height: "500px", width: "500px",
                        backgroundColor: "#b9b5c4", display: "flex",
                        justifyContent: "center", alignItems: "center",
                        flexDirection: "column", boxShadow: "revert",
                        borderRadius:"20px"
                    }}
                >
                    <Typography sx={{ color: "#3a3d12" }} variant="h5">
                        COUNT: {countValue}
                       
                    </Typography>
                    <br />
                    <Box>
                        {/* Disable Decrement button when countValue is less than 1 */}
                        <Button
                            sx={{ marginRight: "15px", backgroundColor: "#2f6125" }}
                            variant="contained"
                            onClick={() => Dispatch(Decrement())}
                            disabled={countValue < 1} // Disable condition
                        >
                            Decrement - -
                        </Button>

                        <Button
                            sx={{ backgroundColor: "#2f6125" }}
                            variant="contained"
                            onClick={() => Dispatch(Increment())}
                        >
                            Increment + +
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CounterApp;