import { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {

    const {createUser}=useContext(AuthContext)

  const handleSignIn = (e) => {
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const photo=form.photo.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,photo,email,password)

    createUser(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user)
        form.reset()
    })
    .catch(error=>console.log(error))
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row space-x-10">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-700 text-white "
                type="submit"
                value="SignUp"
              />
            </div>
          </form>
          <p className="my-4 text-center">
            Already have an account{" "}
            <Link className="text-orange-600 font-semibold" to="/login">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
