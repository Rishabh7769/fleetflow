"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type CompanyForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  gstNumber: string;
};

export default function CompanyPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<CompanyForm>();

  async function onSubmit(data: CompanyForm) {
    try {
      setLoading(true);

      const response = await fetch("/api/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log(result);

      if (response.ok) {
        alert("Company created successfully!");
        reset();
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">
          Create Company
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <input
            {...register("name")}
            placeholder="Company Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("address")}
            placeholder="Address"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("gstNumber")}
            placeholder="GST Number"
            className="w-full border rounded-lg p-3"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Creating..." : "Create Company"}
          </button>
        </form>
      </div>
    </main>
  );
}