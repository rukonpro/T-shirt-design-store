import React from 'react';

const Footer = () => {

    const socialLink=[
        {
            title:"Facebook",
            icon:"/images/facebook.png",
            link:""
        },
        {
            title:"Twitter",
            icon:"/images/twitter.png",
            link: ""
        },
        {
            title:"Instagram",
            icon:"/images/instagram.png",
            link: ""
        }
    ];



    const footerData={
                            footerLink:[
                                {
                                title:"Our Services",
                                categories:[
                                    {
                                        name:"T-shirt",
                                        path:"/"
                                    },{
                                        name:"POD Item",
                                        path:"/"
                                    },{
                                        name:"Brand Identity",
                                        path:"/"
                                    },
                                ]
                            },
                                {
                                    title:"Help",
                                    categories:[
                                        {
                                            name:"Help Center",
                                            path:"/"
                                        },{
                                            name:"Refund Policy",
                                            path:"/"
                                        },{
                                            name:"Vector Information",
                                            path:"/"
                                        },
                                    ]
                                },{
                                    title:"About Us",
                                    categories:[
                                        {
                                            name:"Contact Us",
                                            path:"/"
                                        },{
                                            name:"Privacy Policy",
                                            path:"/"
                                        },{
                                            name:"Terms & Conditions",
                                            path:"/"
                                        },
                                    ]
                                },
                            ]
    }

    return (
        <footer>
            <div className="container mx-auto py-[120px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <div className="flex items-center">
                            <h1 className="w-[75px] h-[57px] text-center"><span
                                className="text-gray-950 text-5xl font-bold font-['Montserrat'] leading-[57.60px]">P</span><span
                                className="text-orange-500 text-5xl font-bold font-['Montserrat'] leading-[57.60px]">B</span>
                            </h1>
                            <h1 className="w-[141px] h-9 text-center"><span
                                className="text-gray-950 text-3xl font-bold font-['Montserrat'] leading-9">Pod</span><span
                                className="text-orange-500 text-3xl font-bold font-['Montserrat'] leading-9">Bulk</span>
                            </h1>
                        </div>

                        <div>
                            <div className="py-[20px]">
                                <ol className="flex items-center gap-2">
                                    {
                                        socialLink?.map((data, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={data?.link}>
                                                        <img
                                                            className="w-[30px] h-[30px]"
                                                            src={data?.icon}
                                                            alt={data?.title}/>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                            <p className=" text-gray-950 text-lg font-normal font-['Montserrat'] leading-7">©
                                2024 Pod Bulk. All rights reserved.
                            </p>
                        </div>
                    </div>


                    <div className="col-span-8">


                        <div>

                            <ol className="grid grid-cols-3">
                                {
                                    footerData?.footerLink?.map(data => {


                                        return (
                                            <li>
                                                <div>
                                                    <h3 className="text-gray-950 text-base font-medium font-['Montserrat'] leading-7">{data?.title}</h3>

                                                    <div className="pt-[44px]">
                                                        <ol>
                                                            {
                                                                data?.categories?.map((data) => {

                                                                    return (
                                                                        <li>
                                                                            <a
                                                                                className=" text-gray-950 text-opacity-50 text-[15.17px] font-normal font-['Poppins'] leading-snug"
                                                                                href={data?.path}>
                                                                                {data?.name}
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ol>
                                                    </div>
                                                </div>

                                            </li>
                                        )
                                    })
                                }
                            </ol>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;