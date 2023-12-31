import React from 'react';
import  "./style.css"
import ReviewCard from "./ReviewCard";
import Carousel from "./Carousel";

const Reviews = () => {

    return (
        <section className="py-16">

            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-center">
                    <div className=" text-center px-5">
                        <h1 className=" text-gray-950 text-xl md:text-[64px] font-bold font-['Montserrat'] uppercase md:leading-[57.60px]">OUR
                            CUSTOMER REVIEWS</h1>
                        <p
                            className=" max-w-[777px] mx-auto pt-5 text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">Discover
                            what our valued customers have to say about their experiences with us. Read these genuine
                            reviews to get a glimpse into the satisfaction and trust we've earned.
                        </p>
                    </div>
                </div>
                <Carousel>
                    <ReviewCard/>
                </Carousel>

            </div>


        </section>
    );
};

export default Reviews;