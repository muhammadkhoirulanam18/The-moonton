import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import route from "ziggy-js";


export default function Register() {
    /**
     * useForm = state management + submit helper dari Inertia
     */
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    /**
     * Submit ke route register Laravel
     */
    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Moonton | Sign Up" />

            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3 font-poppins">
                {/* IMAGE LEFT (DESKTOP ONLY) */}
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/assets/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt="Signup"
                    />
                </div>

                {/* FORM AREA */}
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        {/* LOGO */}
                        <img
                            src="/assets/images/moonton-white.svg"
                            alt="Moonton"
                        />

                        {/* HEADER */}
                        <div className="my-[70px]">
                            <h1 className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </h1>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>

                        {/* FORM */}
                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                {/* NAME */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your fullname..."
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-400 mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Email Address"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-400 mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* PASSWORD */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <p className="text-sm text-red-400 mt-1">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* CONFIRM PASSWORD */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Confirm Password"
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            {/* ACTION */}
                            <div className="grid space-y-[14px] mt-[30px]">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-alerange py-[13px] text-center disabled:opacity-60"
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </button>

                                <Link
                                    href={route("signin")}
                                    className="rounded-2xl border border-white py-[13px] text-center"
                                >
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
