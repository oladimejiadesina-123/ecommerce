import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful')
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IfTAFJwlsmsYmoV68b3Lx8lSd72wYCpqLg4nMKHWyhXfzZTh1Q18vTCZEUdPZpiZ7FihxNxp4nSkJgZAndJnYad00pk6XbkjM'
    return (
       <StripeCheckout
       label='PAY Now'
       name='LADIS NIG LTD'
       billingAddress
       shippingAddress
       image=''
       description={`Your total is $${price}`}
       amount={priceForStripe}
       panelLabel='PAY NOW'
       token={onToken}
       stripeKey={publishableKey}
       />
    )
}

export default StripeCheckoutButton;
