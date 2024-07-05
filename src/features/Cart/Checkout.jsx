import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

function Checkout() {
  const subTotal = useSelector((state) => state.cart.subTotal);
  const cartProductQuantity = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  const shippingCost = 10; // Örnek shipping cost
  const grandTotal = subTotal + shippingCost;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      country: "United States",
      city: "",
      state: "",
      zip: "",
      shipping: "free",
      paymentMethod: "creditCard",
      cardName: "",
      cardNumber: "",
      cardType: "Visa",
      cardExpDate: "",
      cardCvv: "",
      coupon: "",
      comments: "",
      giftWrap: false,
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
      cardName: Yup.string().when("paymentMethod", {
        is: "creditCard",
        then: Yup.string().required("Required"),
      }),
      cardNumber: Yup.string().when("paymentMethod", {
        is: "creditCard",
        then: Yup.string().required("Required"),
      }),
      cardExpDate: Yup.string().when("paymentMethod", {
        is: "creditCard",
        then: Yup.string().required("Required"),
      }),
      cardCvv: Yup.string().when("paymentMethod", {
        is: "creditCard",
        then: Yup.string().required("Required"),
      }),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions."
      ),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Express Checkout Lane</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Address */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">1. Billing Address</h2>
            <div>
              <label className="block">First Name</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <label className="block">Last Name</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500">{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div>
              <label className="block">Email Address</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label className="block">Telephone</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div>
              <label className="block">Address</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500">{formik.errors.address}</div>
              ) : null}
            </div>
            <div>
              <label className="block">Country</label>
              <select
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                {...formik.getFieldProps("country")}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
            <div>
              <label className="block">City</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-500">{formik.errors.city}</div>
              ) : null}
            </div>
            <div>
              <label className="block">State</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                {...formik.getFieldProps("state")}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-red-500">{formik.errors.state}</div>
              ) : null}
            </div>
            <div>
              <label className="block">ZIP Code</label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                {...formik.getFieldProps("zip")}
              />
              {formik.touched.zip && formik.errors.zip ? (
                <div className="text-red-500">{formik.errors.zip}</div>
              ) : null}
            </div>
          </div>

          {/* Shipping Method */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">2. Shipping Method</h2>
            <div>
              <label className="block">
                <input
                  type="radio"
                  name="shipping"
                  value="free"
                  checked={formik.values.shipping === "free"}
                  onChange={formik.handleChange}
                />
                Free Shipping
              </label>
            </div>
            <div>
              <label className="block">
                <input
                  type="radio"
                  name="shipping"
                  value="flat"
                  checked={formik.values.shipping === "flat"}
                  onChange={formik.handleChange}
                />
                Flat Rate - $10.00
              </label>
            </div>

            {/* Payment Method */}
            <h2 className="text-xl font-semibold">3. Payment Method</h2>
            <div>
              <label className="block">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formik.values.paymentMethod === "paypal"}
                  onChange={formik.handleChange}
                />
                PayPal
              </label>
            </div>
            <div>
              <label className="block">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formik.values.paymentMethod === "creditCard"}
                  onChange={formik.handleChange}
                />
                Credit Card
              </label>
            </div>
            {formik.values.paymentMethod === "creditCard" && (
              <div className="space-y-4">
                <div>
                  <label className="block">Name on Card</label>
                  <input
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    type="text"
                    {...formik.getFieldProps("cardName")}
                  />
                  {formik.touched.cardName && formik.errors.cardName ? (
                    <div className="text-red-500">{formik.errors.cardName}</div>
                  ) : null}
                </div>
                <div>
                  <label className="block">Card Number</label>
                  <input
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    type="text"
                    {...formik.getFieldProps("cardNumber")}
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber ? (
                    <div className="text-red-500">
                      {formik.errors.cardNumber}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block">Expiry Date</label>
                  <input
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    type="text"
                    {...formik.getFieldProps("cardExpDate")}
                  />
                  {formik.touched.cardExpDate && formik.errors.cardExpDate ? (
                    <div className="text-red-500">
                      {formik.errors.cardExpDate}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block">CVV</label>
                  <input
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    type="text"
                    {...formik.getFieldProps("cardCvv")}
                  />
                  {formik.touched.cardCvv && formik.errors.cardCvv ? (
                    <div className="text-red-500">{formik.errors.cardCvv}</div>
                  ) : null}
                </div>
              </div>
            )}
          </div>

          {/* Review Your Order */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">4. Review Your Order</h2>
            <div className="bg-white p-4 border rounded shadow-sm">
              <p className="mb-2">
                <span className="font-semibold">Subtotal:</span> ${subTotal}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Shipping:</span> $
                {formik.values.shipping === "flat" ? "10.00" : "0.00"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Total Products:</span>{" "}
                {cartProductQuantity}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Grand Total:</span> $
                {formik.values.shipping === "flat" ? grandTotal : subTotal}
              </p>
            </div>
            <div>
              <label className="block ">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                />
                I have read and agree to the terms and conditions
              </label>
              {formik.touched.terms && formik.errors.terms ? (
                <div className="text-red-500">{formik.errors.terms}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-emerald-500 text-white font-bold rounded hover:bg-emerald-700 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
