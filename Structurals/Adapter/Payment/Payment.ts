class PayPalService {
  sendPayment(amount: number): void {
    console.log(`Procesando pago de $${amount} con %cPayPal`);
  }
}

class StripeService {
  makeCharge(amount: number): void {
    console.log(`Procesando pago de $${amount} con %cStripe`);
  }
}

class MercadoPagoService {
  pay(amount: number): void {
    console.log(
      `Procesando pago de $${amount} con %cMercadoPago`);
  }
}

interface PaymentProcessor {
    processPayment(amount: number): void;
}

class PayPalAdapter implements PaymentProcessor {
    constructor(private service : PayPalService) {}

    processPayment(payment: number): void {
        this.service.sendPayment(payment);
    }
}

class StripeAdapter implements PaymentProcessor {
    constructor(private service : StripeService) {}

    processPayment(payment: number): void {
        this.service.makeCharge(payment);
    }
}

class MercadoPagoAdapter implements PaymentProcessor {
    constructor(private service : MercadoPagoService) {}

    processPayment(payment: number): void {
        this.service.pay(payment);
    }
}

function main() {
    const paymentAmount = 100;

    const paypalService: PayPalService = new PayPalService();
    const paypalProcessor: PaymentProcessor = new PayPalAdapter(paypalService);
  
    const stripeService: StripeService = new StripeService();
    const stripeProcessor: PaymentProcessor = new StripeAdapter(stripeService);

    const mercadoPagoService: MercadoPagoService = new MercadoPagoService();
    const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter(mercadoPagoService);

    console.log('Usando PayPal:');
    paypalProcessor.processPayment(paymentAmount);

    console.log('\nUsando Stripe:');
    stripeProcessor.processPayment(paymentAmount);

    console.log('\nUsando MercadoPago:');
    mercadoPagoProcessor.processPayment(paymentAmount);
}

main();