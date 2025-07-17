import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;
        setLoading(true);

        const result = await elements.submit();
        if (result.error) {
            alert(result.error.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/pay-successful`,
            },
        });

        if (error) {
            alert(error.message);
        }
        

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type='submit' disabled={loading || !stripe || !elements}>
                {loading ? "Processing..." : "Submit"}
            </button>
        </form>
    );
};

export default CheckoutForm;
