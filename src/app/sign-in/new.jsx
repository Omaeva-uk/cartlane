import React from 'react'

const newH = () => {
  return (
    <div>
    <Navbar />
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="mt-24">
            <h2 className="text-4xl font-medium">Get Started Now</h2>
            <p className="text-2xl mt-3">Enter your credentials to access your account</p>
          </div>
          <div className="mt-16">
          <form action="">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email Address</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>
            <div>
              {/* <input type="checkbox" /> */}
              <p>I agree to terms and services</p>
            </div>
            <div>
              <button>Sign up</button>
              <button>Log In</button>
            </div>
          </form>
        </div>  
        </div>
        <div className="flex-1 bg-gridCardBrown">

        </div>
      </div>
      </div>
  )
}

export default newH;