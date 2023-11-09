import Constants from '@/ults/Constant';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillHome, AiFillCaretRight } from 'react-icons/ai'

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordsMatch = password === confirmPassword;
    const showWarning = confirmPassword.length > 0 && !passwordsMatch;
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const [isSubmit, setIsSubmit] = useState(false);
    const reg_init_value = {
        user_type: "1",
        first_name: "",
        email: "",
        phone: "",
        password: "",
        conf_password: "",
        is_subscribe: '',

    };
    const [regData, setRegData] = useState(reg_init_value);
    const [err, setErr] = useState({});
    const handleChangeRegistration = (e) => {
        setRegData({ ...regData, [e.target.name]: e.target.value });
    };

    const regSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true)
        const response = await fetch(`${Constants.BASE_URL}/api/user-registration`, {
            method: "POST",
            // mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(regData), // body data type must match "Content-Type" header
        });
        let res = await response.json();
        if (res.status == '400') {
            let err_list = {}
            for (const [key, value] of Object.entries(res.error)) {
                err_list[key] = value[0]
            }
            setErr(err_list)
            setIsSubmit(false)
        } else {
            setIsSubmit(false)
            setCookie('home_text_token', res?.success?.authorisation?.token);
            window.location.href = "/";
        }
    }
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-3 mb-10">
                <div>
                    <ul className="breadcrumb flex items-center">
                        <li><a href="/"><AiFillHome /></a></li><span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">Account</a></li> <span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/account/register">Register</a></li>
                    </ul>
                </div>
                {/* Left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-5">
                    <div className="col-span-4">
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='text-4xl'>Hometex Cart</h5>
                                <p className='py-3 text-sm'>If you already have an account with us, please login at the login page.</p>
                            </div>
                            {/* personal Details */}
                            <div className='card-body m-5 border'>
                                <div className='border m-5'>
                                    <h5 className='pl-3'>Your Personal Details</h5><hr />
                                    <div className='flex m-5 items-center'>
                                        <label className='w-1/5 pr-3 text-end'>First Name</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="nme"
                                            type="text"
                                            placeholder="Name *"
                                            name='first_name'
                                            value={regData.first_name}
                                            onChange={handleChangeRegistration}
                                        />
                                        <p className="has_error"> {err?.first_name} </p>
                                    </div>

                                    <div className='flex m-5 items-center'>
                                        <label className='w-1/5 pr-3 text-end'>Email</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email *"
                                            name='email'
                                            value={regData.email}
                                            onChange={handleChangeRegistration}
                                        />
                                        <p className="has_error"> {err?.email} </p>
                                    </div>

                                </div>
                                {/* Your Password */}
                                <div className='border m-5'>
                                    <h5 className='pl-3'>Login Information</h5>
                                    <hr className='border-gray-300 my-2' />

                                    <div className='flex m-5 items-center'>
                                        <label className='w-1/5 pr-3 text-end'>Mobile No</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone"
                                            type="number"
                                            placeholder="Mobile No *"
                                            name='phone'
                                            value={regData.phone}
                                            onChange={handleChangeRegistration}
                                        />
                                        <p className="has_error"> {err?.phone} </p>
                                    </div>

                                    <div className='flex items-center my-5'>
                                        <label htmlFor='password' className='w-1/5 pr-3 text-end'>
                                            Password
                                        </label>
                                        <input
                                            id='password'
                                            type='password'
                                            placeholder='Password *'
                                            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            name='password'
                                            value={regData.password}
                                            onChange={handleChangeRegistration}
                                        />
                                        <p className="has_error"> {err?.password} </p>
                                    </div>

                                    <div className='flex items-center my-5'>
                                        <label htmlFor='confirm-password' className='w-1/5 pr-3 text-end'>
                                            Password Confirm
                                        </label>
                                        <input
                                            id='confirm-password'
                                            type='password'
                                            placeholder='Password Confirm *'
                                            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            name='conf_password'
                                            value={regData.conf_password}
                                            onChange={handleChangeRegistration}
                                        />
                                        <p className="has_error"> {err?.conf_password} </p>
                                        {showWarning && (
                                            <span className='text-red-500 text-sm ml-3'>
                                                Passwords do not match
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Newsletter */}
                                <div className='border m-5'>
                                    <h5 className='pl-3'>Newsletter</h5>
                                    <hr className='border-gray-300 my-2' />
                                    <div className="flex items-center m-5">
                                        <label className='w-1/5 pr-3 text-end'>Subscribe</label>
                                        <label className="inline-flex items-center mr-6">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-gray-600"
                                                value="yes"
                                                checked={value === 'yes'}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2 text-gray-700">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-gray-600"
                                                value="no"
                                                checked={value === 'no'}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2 text-gray-700">No</span>
                                        </label>

                                        {/* <p className="has_error"> {err?.conf_password} </p> */}
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <label htmlFor="agree" className="text-gray-700">
                                    I have read and agree to the
                                    <Link href="/PrivacyPolicy" className="text-blue-500 hover:underline">
                                        <b>Privacy Policy</b>
                                    </Link>
                                </label>
                                <input type="checkbox" id="agree" name="agree" value="1" className="form-checkbox h-5 w-5 text-blue-500 ml-2" />
                                {/* <input type="submit" value="Continue" className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow ml-4" /> */}

                                <button
                                    onClick={regSubmit}
                                    id="so-checkout-confirm-button"
                                    data-loading-text="Loading..."
                                    // disabled={!privacyChecked || !termsChecked}
                                    className="px-4 py-2 bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                                >
                                    {(isSubmit) ? 'Processing..' : 'Continue'}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="col-span-1">
                        <div className='card'>
                            <div className="card-header">
                                <h5 className='text-xl'>Account</h5>
                            </div>
                            <div className='card-body'>
                                <ul className="list-disc my-2">
                                    <li>Login / Register</li>
                                    <Link href="/account/Forgotten"><li className='my-2'>Forgotten Password</li></Link>
                                    <li>My Account</li>
                                    <li className='my-2'>Address Book</li>
                                    <li>Wish List</li>
                                    <li className='my-2'>Order History</li>
                                    <li>Downloads</li>
                                    <li className='my-2'>Recurring payments</li>
                                    <li>Reward Points</li>
                                    <Link href="/account/Returns"><li className='my-2'>Returns</li></Link>
                                    <li>Transactions</li>
                                    <li className='my-2'>Newsletter</li>
                                </ul>
                            </div>
                        </div>
                        {/* Content for the right column (20% width) */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register