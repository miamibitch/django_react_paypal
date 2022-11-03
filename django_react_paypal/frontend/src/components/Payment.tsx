import { PayPalButtons } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";


export function Payment() {

    return (
        <div className="card">
            <img src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/158101-apps-news-what-is-klarna-and-how-does-it-let-you-buy-now-pay-later-with-no-interest-image1-fqkl3bal62.jpg" alt="iPhone 14" style={{ width: '100%' }} />
            <div className="card-details">
                <h1>Mobile Phone</h1>
                <p className="price">$100.00</p>
                <p>Here is some information about the product that is being sold..</p>
                <PayPalButtons
                    style={{ layout: "horizontal" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "100.00"
                                    },
                                    custom_id: "Test Site Mobile Phone"  // the name or slug of the thing you're selling
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            toast.success('Payment completed. Thank you, ' + details.payer.name.given_name)
                        });
                    }}
                    onCancel={() => toast(
                        "You cancelled the payment. Try again by clicking the PayPal button", {
                        duration: 6000,
                    })}
                    onError={(err) => {
                        toast.error(
                            "There was an error processing your payment. If this error please contact support.", {
                            duration: 6000,
                        });
                    }}
                />
            </div>
        </div>
    )
}
