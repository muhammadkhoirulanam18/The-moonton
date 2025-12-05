import { useState } from "react";
import { router } from "@inertiajs/react";

const dummyImages = [
    "/img/it.jpg",
    "/img/shipppp.jpg",
    "/img/james-outbond.jpg",
    "/img/batman.jpg",
    "/img/despicable.jpg",
    "/img/catlove.jpg",
];

export default function SignIn() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Sign In successful (UI only - no backend yet)");
        router.visit("/"); // redirect ke Home
    };

    return (
        <div className="min-h-screen flex bg-gray-100 dark:bg-black">
            {/* LEFT IMAGE GRID */}
            <div className="hidden lg:grid grid-cols-2 gap-4 p-10 w-[45%]">
                {dummyImages.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        className="rounded-2xl w-full h-40 object-cover shadow-md"
                        alt="preview"
                    />
                ))}
            </div>

            {/* RIGHT FORM */}
            <div className="flex justify-center items-center w-full lg:w-[55%] px-10">
                <div className="max-w-md w-full text-gray-900 dark:text-gray-100">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center font-bold text-white text-lg">
                            M
                        </div>
                        <span className="font-semibold text-lg">MoontoN</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                        Explore our new movies and get better insights for your
                        life.
                    </p>

                    {/* FORM */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div>
                            <label className="text-sm block mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 outline-none"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm block mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 outline-none"
                                value={form.password}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        {/* Submit Button (fixed) */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold rounded-lg shadow-md"
                        >
                            Start Watching
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="text-center text-sm my-4 text-gray-500 dark:text-gray-400">
                        ─ or ─
                    </div>

                    {/* Create Account Button */}
                    <button
                        onClick={() => router.visit("/signup")}
                        className="w-full py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                    >
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
}


// menambahkan komentar pada setiap bagian kode untuk menjelaskan fungsinya