import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {signUpStart} = this.props;
        const{ displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Password doesn't match!");
            return;
        }
        
        signUpStart({displayName, email, password});
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render(){
        const{ displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text' 
                        value={displayName} 
                        handleChange={this.handleChange} 
                        label='Display Name' 
                        required/>

                    <FormInput 
                        name='email'
                        type='email' 
                        value={email} 
                        handleChange={this.handleChange} 
                        label='Email' 
                        required/>

                    <FormInput 
                        name='password'
                        type='password' 
                        value={password} 
                        handleChange={this.handleChange} 
                        label='Password' 
                        required/>

                    <FormInput 
                        name='confirmPassword'
                        type='password' 
                        value={confirmPassword} 
                        handleChange={this.handleChange} 
                        label='Confirm Password' 
                        required/>
                    <CustomButton type='submit'>Sign up</CustomButton>    
                </form>               
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: signUpData => dispatch(signUpStart(signUpData))
})

export default connect(null, mapDispatchToProps)(SignUp);