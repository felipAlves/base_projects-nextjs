import { Button, TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/global/LayoutComponents/Container'

const StyledForm = styled.form`
  width: 400px;
  height: 400px;

  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 30px;
  }

  button {
    margin-top: 30px;
  }
`

const Login = (): JSX.Element => {
  return (
    <Container>
      <StyledForm>
        <h2>Login</h2>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <TextField id="outlined-basic" label="Senha" variant="outlined" />

        <Button variant="contained" color="primary">
          Logar
        </Button>
      </StyledForm>
    </Container>
  )
}

export default Login
