import { Fragment } from "react";
import Alert from '@material-ui/lab/Alert';
import { APP_TITLE } from "../../constants/lang";

const Header = ({ successMessage, errorMessage }) => (
    <Fragment>
        <h1>{APP_TITLE}</h1>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </Fragment>
);

export default Header;
