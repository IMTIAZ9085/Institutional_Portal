const stripe = require('stripe')('sk_test_your_secret_key');

const handlePayment = async (req, res) => {
  const { amount, currency, paymentMethodId } = req.body;

  try {
    // Create a PaymentIntent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method: paymentMethodId,
      confirm: true,
    });

    // If paymentIntent is successful, send a success response
    res.status(200).json({ success: true, paymentIntent });
  } catch (error) {
    // If there's an error, send an error response
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { handlePayment };