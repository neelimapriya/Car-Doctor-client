import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setservices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setservices(data))
        },[])

    return (
        <div className="mt-4">
           <div className="text-center">
           <h3 className='text-2xl font-bold text-orange-600'>Services</h3>
            <h2 className='text-5xl '>Our Services Area</h2>
            <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don`t look even slightly believable. </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  justify-center">
            {
                services.map(service=><ServiceCard key={service._id} service={service}
            ></ServiceCard>)
            }
           </div>

        </div>
    );
};

export default Services;