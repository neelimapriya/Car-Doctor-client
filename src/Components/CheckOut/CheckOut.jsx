import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);

  const email = user?.email;
  console.log(email);

  const loadedData = useLoaderData();
  console.log(loadedData);
  const { price, title, _id, img } = loadedData;

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const money = price;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.number.value;
    const details = form.message.value;
    const booking = {
      customarName: name,
      img,
      email,
      title,
      date,
     
      money,
      phone,
      details,
    };
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if(data.insertedId){
      alert('service booked successfully')
    }})
  };
  return (
    <div>
      <h2 className="text-center text-3xl p-2 font-semibold border border-red-600 w-2/3 md:w-1/2 mx-auto">
        Book Service: {title}{" "}
      </h2>

      <div>
        <form onSubmit={handleBook} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
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
                defaultValue={"$" + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <textarea
            className="border"
            placeholder="Your message"
            name="message"
            id=""
            cols="10"
            rows="5"
          ></textarea>
          <div className="form-control mt-6">
            <input
              className="btn btn-error"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
