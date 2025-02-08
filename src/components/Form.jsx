import React, { useState } from "react";
import axios from "axios";

const FormData = () => {
    const [routeId, setRouteId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [reject, setReject] = useState("");
    const [prod, setProd] = useState("");
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to send to the backend
        const data = {
            route_id: routeId,
            quantity: parseInt(quantity),
            reject: parseInt(reject),
            prod: parseInt(prod),
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/checked/",
                data
            );
            console.log("Response:", response.data);
        } catch (err) {
            setError(err.response ? err.response.data.detail : "An error occurred");
            console.error("Error:", err);
        }
    };



    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checked Route Form</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Route ID */}
                <div>
                    <label className="block text-gray-600 font-medium">Route ID</label>
                    <input
                        type="text"
                        value={routeId}
                        onChange={(e) => setRouteId(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Quantity */}
                <div>
                    <label className="block text-gray-600 font-medium">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Rejects */}
                <div>
                    <label className="block text-gray-600 font-medium">Rejects</label>
                    <input
                        type="number"
                        value={reject}
                        onChange={(e) => setReject(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Accepted (Production) */}
                <div>
                    <label className="block text-gray-600 font-medium">Accepted (Production)</label>
                    <input
                        type="number"
                        value={prod}
                        onChange={(e) => setProd(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* Error Message */}
            {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        </div>


    );
};

export default FormData;
