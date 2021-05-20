import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
                 <p> The coronavirus and it's various mutants are tough to fight and a growing population that never sleeps might not seem to provide the helpful way out but masking at all times can save multiple lives.
                  Hence we provide to you the armour to fight this battle with ease 

Given below are separate links to PPE Kits, Masks, Gloves, Face shields, disposal footwear and bags all available at affordable rates for your convenience.</p>
{Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title}  />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
