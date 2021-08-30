import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { gridSpacing } from '../store/constant';
import Button from '@material-ui/core/Button/Button';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    overrides: {
        MuiButton: {
            label: {
                color: '#f1f1f1'
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

export default function InputWithIcon() {
    return (
        <form action="./tweets">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Termos" name="terms" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Quantidade de tweets" name="quantity" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Localização" name="location" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Idioma" name="language" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Button theme={theme} variant={'contained'} color={'primary'} style={{ width: '98.5%' }} type={'submit'}>
                Submeter
            </Button>
        </form>
    );
}
