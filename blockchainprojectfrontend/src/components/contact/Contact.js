import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Contact.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));


const WhiteBorderTextField = styled(TextField)`

& label.Mui-focused {
  color: white;
  border-color:  white !important;

}
& .MuiInput-underline:after {
    border-color:  white !important;
}
& .MuiInput-underline:hover {
    border-color:  white !important;
}

& .MuiOutlinedInput-root {
    & fieldset {
        border-color:  white !important;
      }
    
    
    &.Mui-focused fieldset {
        border-color: white !important;
  }
}
`;




const Contact = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="contact main" id="contact">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} xl={12} justifyContent="center">
                    <div className="skills-text-div">
                        <h1 className="skill-h1">Contact Us</h1>
                        <p className="skill-h2">lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} xl={12} justifyContent="center">

                    <form className="form-control">
                        <Grid container className="form-display">
                            <Grid item xl={12} xs={12} className="form-field">
                                <WhiteBorderTextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    type="email"
                                    maxRows={1}
                                    InputProps={{
                                        className: "field-input"
                                    }}
                                    InputLabelProps={{
                                        className: "field-label"
                                    }}

                                />
                            </Grid>
                            <Grid item xl={12} xs={12} className="form-field">
                                <WhiteBorderTextField
                                    id="outlined-textarea"
                                    label="Your Comments"
                                    fullWidth
                                    multiline
                                    InputProps={{
                                        className: "field-input"
                                    }}
                                    InputLabelProps={{
                                        className: "field-label"
                                    }}
                                    rows={6}
                                />

                            </Grid>
                            <Grid item xl={12} xs={12} className="form-field">

                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    style={{ backgroundColor: '#fff', color: '#000', fontWeight: '900' }}
                                    type="submit"
                                >
                                    Submit Review
                                </Button>

                            </Grid>
                        </Grid>
                    </form>

                </Grid>

            </Grid>
        </Box>
    )
}

export default Contact
