import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from "axios";

const SignUp = () => {
    const [loginData, setLoginData] = useState({
        emailOrName: '',
        password: ''
    });

    const onchange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const signup = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        axios
        .get("http://localhost:5000/api/users")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log('Error from UpdateBookInfo');
        });
    }

    return (
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700" id='signin'>
            <div className="container h-full p-10">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* <!-- Left column container with background and description--> */}
                                <div
                                    className="flex items-center md:px-0 lg:w-6/12 lg:rounded-l-lg"
                                    style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            Welcome to our site
                                        </h4>
                                        <p className="text-sm">
                                            You can get everything you want in our site.
                                            {/* Our team consists of 6 people<br />Composed of 1 communication manager, 3 front-end developers and web designers, and 3 back-end developers.<br />The team's mission is to meet customers' needs 100% and provide them with the products they want at the highest level.<br />Let's run towards the best product.<br />Let's cherish each other's trust.<br />Thank you for visiting our team. */}
                                        </p>
                                    </div>
                                </div>

                                {/* <!-- Right column container--> */}
                                <div className="px-4 rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                                    <div className="md:mx-6 md:p-12">
                                        {/* <!--Logo--> */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo" />
                                            <h4 className="mb-2 mt-1 pb-1 text-xl font-semibold">
                                                Sign Up
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">Please create your account</p>
                                            {/* <!--Username or Email Address input--> */}
                                            <div className="relative mb-4 " data-te-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 border-b-2"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Username or Email Address"
                                                    name="emailOrName"
                                                    value={loginData.emailOrName}
                                                    onChange={onchange}
                                                     />
                                            </div>

                                            {/* <!--Password input--> */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="password"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 border-b-2"
                                                    id="exampleFormControlInput11"
                                                    name="password"
                                                    placeholder="Password" 
                                                    value={loginData.password}
                                                    onChange={onchange}
                                                    />
                                            </div>

                                            {/* <!--Current Password input--> */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="password"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 border-b-2"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Confirm Password" />
                                            </div>

                                            {/* <!--Submit button--> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    type="button"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
                                                    onClick={signup}
                                                    >
                                                    Sign Up
                                                </button>
                                            </div>

                                            {/* <!--Register button--> */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p></p>
                                                <button
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    <Link to='/'>Log in</Link>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignUp;