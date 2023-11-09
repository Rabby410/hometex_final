import AccountRight from '@/components/layout/AccountRight';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillCaretRight, AiFillHome } from 'react-icons/ai'

import Constants from '@/ults/Constant'
import { deleteCookie, getCookie } from 'cookies-next';

export async function getServerSideProps(context) {
    // let id = context.query.id;
    let user_token = context.req.cookies?.home_text_token;
    const res = await fetch(
        Constants.BASE_URL + '/api/my-profile', {
        method: 'GET',
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached     
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + user_token,
        },
    }

    )
    const profile = await res.json();


    return {
        props: {
            profile
        },
    }
}


const MyAccount = ({ profile }) => {

    // if(profile.user.length)


    if (profile.user.length == 0) {
        deleteCookie('home_text_token')
        window.location.href = "/";
    }

    const [isSubmit, setIsSubmit] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(profile?.user?.name);
    const [mobile, setMobile] = useState(profile?.user?.phone);
    const [email, setEmail] = useState(profile?.user?.email);
    const [address, setAddress] = useState('New York City, USA');

    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleSave = async (e) => {
        e.preventDefault();
        // setIsEditing(false);
        setIsSubmit(true)
        const update_value = {
            name: name,
            email: email,
            address: address
        };
        const response = await fetch(`${Constants.BASE_URL}/api/my-profile-update`, {
            method: "POST",
            // mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + getCookie('home_text_token'),
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(update_value), // body data type must match "Content-Type" header
        });
        let res = await response.json();

        if (res.status == '400') {
            // console.log(data, 'post_data')
            setIsSubmit(false)
        } else if (res.status == '200') {
            setIsSubmit(false)

        }
        console.log(res, 'update_profile')

        // Perform save operation here
    };
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-3 mb-10">
                <div>
                    <ul className="breadcrumb flex items-center">
                        <li><a href="/"><AiFillHome /></a></li><span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">Account</a></li> <span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/Forgotten">My Account</a></li>
                    </ul>
                </div>
                {/* Left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-5">
                    <div className="col-span-4">
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='text-4xl'>Hometex</h5>
                                {/* <p className='py-3 text-sm'>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</p> */}
                            </div>
                            {/* personal Details */}
                            <div className="max-w-md mx-auto bg-white shadow-lg p-8 mt-10">
                                <div className="flex items-center mb-6">
                                    <img
                                        className="w-16 h-16 rounded-full mr-4"
                                        src="https://placekitten.com/200/200"
                                        alt="Profile"
                                    />
                                    <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                                </div>

                                <div className="mb-6">
                                    <p className="text-gray-700">
                                        <strong>Name:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="border p-1"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        ) : (
                                            name
                                        )}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Mobile:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="border p-1"
                                                value={mobile}
                                                readOnly={true}
                                            // onChange={(e) => setMobile(e.target.value)}
                                            />
                                        ) : (
                                            mobile
                                        )}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Email:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="border p-1"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        ) : (
                                            email
                                        )}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Address:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="border p-1"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        ) : (
                                            address
                                        )}
                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    {isEditing ? (
                                        <button
                                            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                                            onClick={handleSave}
                                        >
                                            {(isSubmit) ? 'Processing..' : 'Update'}
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                                            onClick={handleEdit}
                                        >
                                            Edit
                                        </button>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Right Section */}
                    <AccountRight />
                </div>
            </div >
        </>
    )
}

export default MyAccount