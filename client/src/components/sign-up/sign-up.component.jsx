import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions';
import './sign-up.styles.scss';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const{ displayName, email, password, confirmPassword} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password doesn't match!");
            return;
        }
        
        signUpStart({displayName, email, password});
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

    return(
        <div className='sign-up'>
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName'
                    type='text' 
                    value={displayName} 
                    handleChange={handleChange} 
                    label='Display Name' 
                    required/>

                <FormInput 
                    name='email'
                    type='email' 
                    value={email} 
                    handleChange={handleChange} 
                    label='Email' 
                    required/>

                <FormInput 
                    name='password'
                    type='password' 
                    value={password} 
                    handleChange={handleChange} 
                    label='Password' 
                    required/>

                <FormInput 
                    name='confirmPassword'
                    type='password' 
                    value={confirmPassword} 
                    handleChange={handleChange} 
                    label='Confirm Password' 
                    required/>
                <CustomButton className='custom-button media' type='submit'>Sign up</CustomButton>    
            </form>               
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: signUpData => dispatch(signUpStart(signUpData))
})

export default connect(null, mapDispatchToProps)(SignUp);