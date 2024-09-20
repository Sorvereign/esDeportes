'use client';

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type LoginFormProps = {
    email: string;
    password: string;
};
export default function Home() {
    const [error, setError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormProps>({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSubmitForm = async (data: { email: string; password: string }) => {
        try {
            await signIn("credentials", {
                email: data.email,
                password: data.password,
            });
        } catch (error) {
            setError(`Failed to sign in ${error}`);
        }
    };
    return (
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-2xl font-bold text-center py-4">Sign up</h1>
            <div className="rounded-md bg-yellow-50 p-4">
                <div className="flex">
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                            Login Credential
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                            <p>email: admin@admin.com</p>
                            <p>Password: admin</p>
                        </div>
                    </div>
                </div>
            </div>
            <form
                className="mt-5 space-y-6"
                onSubmit={handleSubmit(handleSubmitForm)}
            >
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Correo electrónico
                    </label>
                    <div className="mt-2">
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <span className="text-red-500 text-xs">{errors.email?.message}</span>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            {...register("password", { required: "Password is required" })}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <span className="text-red-500 text-xs">
                        {errors.password?.message}
                    </span>
                </div>
                {error && <p className="text-red-500 text-xs">{error}</p>}
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
}
