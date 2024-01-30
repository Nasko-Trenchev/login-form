import WarningIcon from '@mui/icons-material/Warning';
import classes from './ErrorBoundry.module.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function ErrorBoundry() {
    const navigate = useNavigate();
    return (
        <div className={classes.centeredFeedback}>
            <div className={classes.flexErrorContainer}>
                <WarningIcon color="error" />
                <h4>You`ve encountered an error</h4>
            </div>
            <p>The path that you`ve entered can`t be found.</p>
            <div className={classes.backToHomePageBtn}>
                <Button variant="contained" onClick={() => navigate('/')}>Back to homepage</Button>
            </div>
        </div>
    )
}

export default ErrorBoundry;