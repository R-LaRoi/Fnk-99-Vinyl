import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface PaymentFormData {
  email: string;
  fullName: string;
  shipping: string;
  street: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  subtotal: number;
  orderId: string
}


interface PaymentFormProps {
  subtotal: number
  orderId: string
}


export function PaymentForm({ subtotal, orderId }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentFormData>({
    subtotal,
    orderId,
    email: '',
    fullName: '',
    shipping: '',
    street: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',

  });

  const navigate = useNavigate();
  // const { clearCart } = useCart();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  async function orderSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);


    if (orderSubmitted) {

      try {
        const result = await axios.post('/api/customer-order', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setResponse(result.data);
        console.log(result.data);

        // need to clear the cart-----

        setFormData({
          subtotal,
          orderId,
          email: '',
          fullName: '',
          shipping: '',
          street: '',
          state: '',
          zip: '',
          cardNumber: '',
          expiry: '',
          cvc: '',
        });


      } catch (err: any) {
        setError(err)
        console.error('Error saving order', err);
      } finally {
        setOrderSubmitted(false);
      }
    }
    navigate('/order-confirmation')
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  // <----------------Payment Form ----------------------> 

  return (
    <div>
      <form onSubmit={orderSubmit}>
        <div className="mt-10 bg-gray-100 px-8 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <div className="text-gray-900 text-sm">ORDER: {orderId} </div>
          <div className="">
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
            <div className="relative">
              <input required type="email" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="example@email.com"
                onChange={handleChange} />

            </div>

            <label htmlFor="fullName" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
            <div className="relative">
              <input required
                type="text" id="fullName" name="fullName" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 mb-6
                        text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="name"
                onChange={handleChange} minLength={5} maxLength={50} />

              <div className="address">
                <div>
                  <h3 className="text-sm mb-2">Shipping</h3>
                  <div className="flex items-center">
                    <label className="inline-flex items-center mr-4">
                      <input
                        required
                        type="radio"
                        name="shipping"
                        value="2-Day"
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2 text-sm">2-Day</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        required
                        type="radio"
                        name="shipping"
                        value="Ground"
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2 text-sm">Ground</span>
                    </label>
                  </div>
                </div>
                <label htmlFor="shipping-address" className="mt-4 mb-2 
      block text-sm font-medium">Address</label>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input required
                      type="text"
                      id="shipping-address"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Street Address"

                    />
                  </div>
                  <input
                    required
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ST"
                  />

                  <input
                    required
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ZIP"
                  />

                </div>
              </div>

              <div className="card">
                <label htmlFor="card-number" className="mt-4 mb-2 block text-sm font-medium">Card Number</label>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      required
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="flex-shrink-0 rounded-md border border-gray-200 p-1 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      style={{ height: '50px' }}
                    />
                  </div>
                  <input required
                    type="text"
                    name="expiry"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    minLength={4}
                    maxLength={4}
                    placeholder="expiry"
                    onChange={handleChange}
                  />
                  <input
                    required
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVC"
                    minLength={3}
                    maxLength={4}
                  />
                </div>
              </div>
              <div>
                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                    <p className="font-semibold text-gray-900">{subtotal}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Shipping</p>
                    <p className="font-semibold text-gray-900">$FREE</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">{subtotal}</p>
                </div>
              </div>
              <div>

              </div>
            </div>

            <button type="submit" className=" ord-btn checkout-btn mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
          </div>
        </div>
      </form>
    </div>

  )
}

