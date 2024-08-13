"use client";
import * as React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
} from "@mui/material";
import Image from "next/image";
import "../components/style/custom.css";
import logoimage from "../../../public/cake2.jpg";
import { useState } from "react";
import { useStore } from "../store";
import { toast } from "react-toastify";

function SignUp() {
  const { userStore } = useStore();

  const [firstname, setUserFirstname] = useState("");
  const [lastname, setUserLastname] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [comPassword, setUserComPassword] = useState("");

  const [userFirstnameError, setUserFirstnameError] = useState("");
  const [userLastnameError, setUserLastnameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [userComPasswordError, setUserComPasswordError] = useState("");

  const userSignUp = async (e: any) => {
    if (firstname === "") {
      setUserFirstnameError("Please enter the First Name");
    } else if (lastname === "") {
      setUserLastnameError("Please enter the Last Name");
    } else if (email === "") {
      setUserEmailError("Please enter the Email");
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(email)) {
      setUserEmailError("Please enter the valid Email");
    } else if (password === "") {
      setUserPasswordError("Please enter the Password");
    } else if (comPassword === "") {
      setUserComPasswordError("Please enter the Confirm Password");
    } else if (!(comPassword === password)) {
      setUserComPasswordError("Miss Match your password. Please Re-enter");
    } else {
        await userStore.register({
            firstname,
            lastname,
            email,
            password
        }).then((res) =>{
            toast.success("Register Success!");
            
        })
    }
  };

  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image
            src={logoimage}
            width={400}
            height={600}
            alt="Picture of the author"
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <Box
            sx={{
              bgcolor: "red.50",
              borderRadius: 3,
              p: 5,
              ml: 10,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Shaluu Cake
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Sign Up to Shaluu Cake or{" "}
              <Link href="#" underline="hover" color="primary">
                Already have an account? Sign in
              </Link>
            </Typography>

            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => setUserFirstname(e.target.value)}
                />
                {userFirstnameError !== "" ? (
                  <label className="text-danger">{userFirstnameError}</label>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => setUserLastname(e.target.value)}
                />
                {userLastnameError !== "" ? (
                  <label className="text-danger">{userLastnameError}</label>
                ) : null}
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              sx={{ mt: 4 }}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            {userEmailError !== "" ? (
              <label className="text-danger">{userEmailError}</label>
            ) : null}
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ mt: 3 }}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            {userPasswordError !== "" ? (
              <label className="text-danger">{userPasswordError}</label>
            ) : null}
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ mt: 3 }}
              onChange={(e) => setUserComPassword(e.target.value)}
            />
            {userComPasswordError !== "" ? (
              <label className="text-danger">{userComPasswordError}</label>
            ) : null}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 5,
                py: 1.5,
                fontWeight: "bold",
                bgcolor: "rose.300",
                borderRadius: "50px",
              }}
              className="primary-button signup-button"
              onClick={userSignUp}
            >
              Create Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
