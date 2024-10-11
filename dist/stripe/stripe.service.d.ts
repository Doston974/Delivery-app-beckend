import Stripe from 'stripe';
export declare class StripeService {
    private stripe;
    constructor();
    createPaymentIntent(options: Stripe.PaymentIntentCreateParams): Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
