import backgroundImg from '../assets/background.jpg';
import React, { useState, useMemo } from 'react';
import useForm from '../Hooks/useForm.jsx';
import { redirect, useNavigate } from 'react-router-dom';

const LogInComponent = () => {
    const { info, handleChange } = useForm();
    const [granted, setGranted] = useState(false);
    const navigate = useNavigate()
    if(granted){
        navigate("/dashboard") 
    }

    const registerCookies = useMemo(() => {
        const cookieArray = document.cookie.split("; ");
        const cookieObj = {};
        cookieArray.forEach(cookie => {
            const [name, value] = cookie.split("=");
            cookieObj[name] = value;
        });
        return cookieObj;
    }, []);

    const isSameUser = (cookies, userInfo) => {
        return cookies.username === userInfo.username && cookies.password === userInfo.password;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", info);

        const isSame = isSameUser(registerCookies, info);
        console.log(isSame);
        setGranted(isSame);

        Object.keys(info).forEach(key => handleChange({ target: { name: key, value: "" } }));
    };


    return (
        <section className="h-full" style={{ backgroundImage: `url(${backgroundImg})` }}>

            {/* Container */}
            <div className="h-full w-full flex flex-col items-center justify-center text-center">

                {/* For better styling */}
                <div className="max-h-max max-w-max bg-gray-200 p-20 rounded-xl max-[900px]:p-10">
                    <h2 className="text-5xl font-MonaSpace pb-9 max-[900px]:text-2xl max-[900px]:pb-5">Login</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            required
                            placeholder="Username"
                            name="username"
                            value={info.username || ""}
                            onChange={handleChange}
                            className="rounded-2xl text-center text-2xl text-white font-bold py-3 bg-green-900 border-0 mb-6 max-[1300px]:text-base max-[1000px]:text-sm"
                        />
                        <br />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            name="password"
                            value={info.password || ""}
                            onChange={handleChange}
                            className="rounded-2xl text-center text-2xl text-white font-bold py-3 bg-green-900 border-0 mb-6 max-[1300px]:text-base max-[1000px]:text-sm"
                        />
                        <br />
                        <button
                            type="submit"
                            className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xl font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong max-[1300px]:text-base max-[1000px]:text-sm"
                        >
                            Submit
                        </button>

                        <p className="text-xl pt-4" style={{ color: granted ? 'green' : 'red' }}>{granted? "Access granted" : "Access not granted"}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LogInComponent;