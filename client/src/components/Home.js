import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Home = () => (
    <Paper style={{
        padding: '2em',
        margin: '2em',

    }}>
        <Typography variant="h4">Todo Application</Typography>
        <Typography variant="body1">Welcome to Todo Application.</Typography>
    </Paper>
);
  

export default Home;