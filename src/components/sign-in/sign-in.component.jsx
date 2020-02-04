import React, { Component } from "react";
import { FormInput, CustomButton } from '..';
import './sign-in.styles.scss';

export class SignIn extends Component {
  constructor() {
    super()
    this.state = { 
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }


  render() { 
    return ( 
      <div className='sign-in'>
      <h2>Sign in</h2>

      <form onSubmit={this.handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={this.handleChange}
          value={this.state.email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={this.state.password}
          handleChange={this.handleChange}
          label='Password'
          required 
        />
        <CustomButton type='submit'> Sign In </CustomButton>
      </form>
    </div>
    )
  }
}
 
export default SignIn;