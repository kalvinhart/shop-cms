import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAuth } from "../../hooks/useAuth/useAuth";

import { signIn } from "../../app/slices/authSlice";

import { Avatar, Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { UserCredentials } from "../../types/Auth";

type LocationState = {
  from: {
    pathname: string;
  };
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget as HTMLFormElement);

    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) return;

    const userCredentials: UserCredentials = {
      email: email as string,
      password: password as string,
    };

    dispatch(signIn(userCredentials));
  };

  useEffect(() => {
    if (user.email !== "") {
      navigate(
        (location.state as LocationState).from
          ? (location.state as LocationState).from
          : "/"
      );
    }
  }, [user, navigate, location.state]);

  return (
    <Container
      component="main"
      fixed
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4">Sign In</Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
