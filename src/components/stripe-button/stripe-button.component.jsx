import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publisableKey = 'pk_test_51HsmgBBYLuoR1L2vEUQ6iHQAT5aXXTfBSrTmklm2wNfZVDqoIrUXBp9E2K1OCz1gb9XDd3NsnOitnc7YqCLaXwtC009z1SHNax';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
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