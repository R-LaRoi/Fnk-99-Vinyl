

interface PaymentFormProps { }

export function PaymentForm({ }: PaymentFormProps) {
  return (
    <div>
      <div className="mt-10 bg-gray-50 px-8 pt-8 lg:mt-0">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400">Complete your order by providing your payment details.</p>
        <div className="">
          <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
          <div className="relative">
            <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="example@email.com" />

          </div>

          <label htmlFor="fullName" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
          <div className="relative">
            <input type="text" id="fullName" name="fullName" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 mb-6
           text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="name" />

            <div className="address">
              <div>
                <h3 className="text-sm ">shipping</h3>
                <label>
                  <input type="radio" name="shipping" value="2-Day" />
                  <span className="text-sm p-1">2-Day</span>
                </label>
                <label className="ml-4">
                  <input type="radio" name="shipping" value="Ground" />
                  <span className="text-sm p-1">Ground</span>
                </label>
              </div>
              <label htmlFor="billing-address" className="mt-4 mb-2 
      block text-sm font-medium">Address</label>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                  />
                </div>
                <select name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                  <option value="State">State</option>
                </select>
                <input
                  type="text"
                  name="billing-zip"
                  className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                />
              </div>
            </div>

            <div className="card">
              <label htmlFor="card-number" className="mt-4 mb-2 block text-sm font-medium">Card Number</label>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input type="text" id="card-no" name="card-no" className="w-full  rounded-md border border-gray-200 p-1  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" style={{ height: '50px' }} />
                </div>
                <input
                  type="text"
                  name="expiry"
                  className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="expiry"
                />
                <input
                  type="text"
                  name="expiry"
                  className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="cvc"
                />
              </div>
            </div>
            <div>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">$250.01 </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">$FREE</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$250.01</p>
              </div>
            </div>
            <div>

            </div>


          </div>

          <button className="  checkout-btn mt-4 mb-8 w-full rounded-md bg-gray-600 px-6 py-3 font-medium text-white">Place Order</button>
        </div>
      </div></div>
  )
}
