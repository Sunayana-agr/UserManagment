import React, { useEffect ,useState} from 'react';
import validator from 'validator'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from "../../redux/User/userAction";


const theme = createTheme();

export default function EnterUserInfo() {
  let { status } = useSelector((state) => ({ status: state.userReducer.userStatus.status }))
  const [error, setError] = useState(status)
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getUserList());
  }, [status,error]);
  function ErrorMessage() {
    return (
      <Typography variant="body2" color="text.secondary" align="left">
        {error}
      </Typography>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const re = /^[A-Za-z]+$/;
    if(firstName.length === 0 || lastName.length===0 || email.length===0)
    {
      setError('Name and email is mandatory');
    }
    else if(re.test(firstName) ||re.test(firstName) )
    {
      setError('Name only alphabets allowed');
    }
    else if (firstName.length > 100 || lastName.length > 100) {
      setError('Name is greater than 100');
    }
    else if (!validator.isEmail(email)) {
      setError('Invalid email')
    }
    else {
      dispatch(
        saveUser(firstName, lastName, email)
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter User Details
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="FirstName"
              type="text"
              id="firstName"
              //value={firstName}
              autoComplete="firstName"
            // onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              //value={lastName}
              id="lastName"
              autoComplete="lastName"
            //onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // value={email}
              autoComplete="email"
              autoFocus
            // onChange={handleInputChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save User
            </Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
        <ErrorMessage sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
