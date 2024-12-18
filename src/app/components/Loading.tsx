import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useStepsContext } from '../context/stepsContext';

export function Loading({ isLoading }: { isLoading: boolean }) {
    const value = useStepsContext()

    return (
        <>
            <Backdrop color={"#20365F"} open={isLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}