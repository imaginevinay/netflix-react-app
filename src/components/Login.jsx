/* eslint-disable react/no-unescaped-entities */
import Header from "./Header";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
          className="w-full h-full"
        />
      </div>
      <Box className="absolute p-14 w-1/4 my-36 mx-auto right-0 left-0 text-white bg-[rgba(0,0,0,.75)] bg-white"
      component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }}}
      noValidate autoComplete="off" >
        <TextField className="w-full bg-[#333] h-12 py-4 px-5 rounded mb-4 leading-[50px] text-white"
          required
          id="standard-required"
          label="Email Id"
          variant="standard"
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </Box>
    </div>
  );
};

export default Login;
