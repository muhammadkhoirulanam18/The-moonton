import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { motion } from "framer-motion";

export default function Pricing() {
    // toggle price state
    const [plan, setPlan] = useState("monthly");

    const basicPrice = plan === "monthly" ? 299000 : 799000; // yearly = 3 bulan gratis
    const premiumPrice = plan === "monthly" ? 800000 : 2200000; // yearly discount

    return (
        <AppLayout>
            <div className="px-6 sm:px-6 lg:px-10 py-10">
                {/* MAIN CONTAINER */}
                <div className="max-w-6xl mx-6">
                    {/* TITLE */}   
                    <div className="text-center mb-10">
                        <h1 className="text-2xl sm:text-3xl font-bold">
                            Pricing for Everyone
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                            Invest your little money to get a whole new
                            experience.
                        </p>
                    </div>

                    {/* TOGGLE MONTHLY / YEARLY */}
                    <div className="flex justify-center mb-12">
                        <div className="flex bg-gray-200 dark:bg-gray-700 rounded-full p-1 gap-1">
                            {/* MONTHLY */}
                            <button
                                onClick={() => setPlan("monthly")}
                                className={`px-4 py-2 text-sm rounded-full transition
                ${
                    plan === "monthly"
                        ? "bg-orange-500 text-white shadow font-semibold"
                        : "text-gray-500 dark:text-gray-300"
                }`}
                            >
                                Monthly
                            </button>

                            {/* YEARLY */}
                            <button
                                onClick={() => setPlan("yearly")}
                                className={`px-4 py-2 text-sm rounded-full transition
                ${
                    plan === "yearly"
                        ? "bg-orange-500 text-white shadow font-semibold"
                        : "text-gray-500 dark:text-gray-300"
                }`}
                            >
                                Yearly (Save 20%)
                            </button>
                        </div>
                    </div>

                    {/* PRICING CARDS */}
                    <div
                        className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        gap-6 sm:gap-8
                        place-items-start
                        items-start
                    "
                    >
                        {/* BASIC PLAN */}
                        <motion.div
                            layout
                            className="w-full border rounded-3xl p-6 shadow-sm bg-white dark:bg-gray-900"
                        >
                            <h2 className="font-semibold text-gray-600 dark:text-gray-300 mb-2">
                                Basic
                            </h2>

                            <motion.p
                                key={basicPrice}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-3xl font-bold"
                            >
                                IDR {basicPrice.toLocaleString("id-ID")}
                            </motion.p>
                            <p className="text-gray-500 text-sm">
                                /{" "}
                                {plan === "monthly" ? "3 months" : "12 months"}
                            </p>

                            <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                                <li className="flex items-center gap-2">
                                    ✔ Unlock 10 movies
                                </li>
                                <li className="flex items-center gap-2">
                                    ✔ Up to 3 users
                                </li>
                                <li className="flex items-center gap-2">
                                    ✔ Support 24/7
                                </li>
                            </ul>

                            <button
                                className="
                                mt-8 w-full py-3 border rounded-xl font-semibold 
                                hover:bg-gray-100 dark:hover:bg-gray-700 transition
                            "
                            >
                                Start Basic
                            </button>
                        </motion.div>

                        {/* PREMIUM PLAN */}
                        <motion.div
                            layout
                            className="
                                w-full rounded-3xl p-6 shadow-lg bg-black text-white relative
                            "
                        >
                            <div className="absolute top-8 left-8 bg-orange-500 text-white px-3 py-2 rounded-full text-xs">
                                ★
                            </div>

                            <h2 className="font-semibold opacity-80 mb-2 mt-10">
                                For Greatest
                            </h2>

                            <motion.p
                                key={premiumPrice}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-3xl font-bold"
                            >
                                IDR {premiumPrice.toLocaleString("id-ID")}
                            </motion.p>
                            <p className="text-gray-300 text-sm">
                                /{" "}
                                {plan === "monthly" ? "3 months" : "12 months"}
                            </p>

                            <ul className="mt-6 space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    ✔ Unlock 200 movies
                                </li>
                                <li className="flex items-center gap-2">
                                    ✔ 180 subtitles
                                </li>
                                <li className="flex items-center gap-2">
                                    ✔ iOS, Android, TV
                                </li>
                                <li className="flex items-center gap-2">
                                    ✔ Offline Mode
                                </li>
                                <li className="flex items-center gap-2">
                                    ✔ Up to 20 users
                                </li>
                                <li className="flex items-center gap-2">
                                    ✔ Support 24/7
                                </li>
                            </ul>

                            <button
                                className="
                                mt-8 w-full py-3 rounded-xl 
                                bg-orange-500 hover:bg-orange-600 
                                font-semibold transition
                            "
                            >
                                Subscribe Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
