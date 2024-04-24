import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51P3aQJSFd45tmfedHwdVez65pWPdNByl0rokhFq8jNsXipX1dytEImgri6wU7JYesFelrqXEn2IZyTxC0jeQ7xfm00sxsNgAv2');

const Payment = () => {
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setPaymentType(value);
    if (value === 'exam-fee') {
      setAmount(1200);
    } else if (value === 'tuition-fee') {
      setAmount(70000);
    } else if (value === 'backlog') {
      setAmount(1000);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      amount: amount * 100, // Stripe expects amount in cents
      currency: 'inr', // Currency in Indian Rupee
    });

    if (error) {
      console.error('Error:', error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Send payment data to the backend
      sendPaymentData(paymentMethod.id);
    }
  };

  const sendPaymentData = async (paymentMethodId) => {
    try {
      const response = await fetch('api/auth/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency: 'inr', paymentMethodId }),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      console.log('Payment successful');
      // Handle success, e.g., display a success message to the user
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  const handleCancel = () => {
    alert('You cancelled the payment');
  };

  return (
    <div className="container">
      <h2 className="payhead">ONLINE FEES PAYMENT</h2>

      <h4 style={{ fontWeight: 'bold' }}>PAYMENT DETAILS</h4>
      <p>Payment is being made for: Student 12029990904 10/10/2022 Xaren Lawrence</p>
      <h6>PAY FOR :</h6>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="radio" name="paymentType" value="tuition-fee" onChange={handleRadioChange} />
        <p style={{ marginRight: '1rem' }}>Tuition Fees</p>
        <input type="radio" name="paymentType" value="exam-fee" onChange={handleRadioChange} />
        <p style={{ marginRight: '1rem' }}> Exam Fee</p>
        <input type="radio" name="paymentType" value="backlog" onChange={handleRadioChange} />
        <p>Backlog</p>
      </div>
      <br />

      <h6>CURRENCY (IN RUPEE) :</h6>
      <h6>Amount</h6>
      <input type="number" value={amount} readOnly />

      <div className="paybtn">
        <button className="btn btn-success" onClick={handleSubmit}>
          Continue
        </button>

        <button className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const PaymentWithStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default PaymentWithStripe;
