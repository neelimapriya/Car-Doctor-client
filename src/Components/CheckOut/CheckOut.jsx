import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AuthProvider from "../Providers/AuthProvider";


const CheckOut = () => {
    const {user}=useContext(AuthProvider)
    console.log(useContext(AuthProvider))
    // const email=user?.email;
    console.log(user)
 
  const loadedData = useLoaderData();
  // console.log(loadedData)
  const { price, title } = loadedData;
  const handleBook =(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <h2 className="text-center text-3xl p-2 font-semibold border border-red-600 w-2/3 md:w-1/2 mx-auto">Book Service: {title} </h2>

      <div>
        <form onSubmit={handleBook} className="card-body">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
            //   defaultValue={email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
             name="date"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              name="price"
              className="input input-bordered"
              required
            />
           
          </div>
         </div>
         <textarea className="border" placeholder="Your message" name="message" id="" cols="10" rows="5"></textarea>
          <div className="form-control mt-6">
          
            <input className="btn btn-error" type="submit" value="Order Confirm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
