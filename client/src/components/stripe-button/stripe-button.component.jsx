import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publisableKey = 'pk_test_51HsmgBBYLuoR1L2vEUQ6iHQAT5aXXTfBSrTmklm2wNfZVDqoIrUXBp9E2K1OCz1gb9XDd3NsnOitnc7YqCLaXwtC009z1SHNax';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment error: ' + JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use provided credit card')
        })
        
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publisableKey}
        />
    );
}

export default StripeCheckoutButton;