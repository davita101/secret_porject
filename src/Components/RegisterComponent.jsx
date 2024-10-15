import useForm from "../Hooks/useForm.jsx";
import {useEffect} from "react";

const RegisterComponent = () => {
    const {info, handleChange} = useForm();

    useEffect(() => {
        console.log(info);
    }, [info]);

    return (
        <section className="w-full h-screen flex items-center justify-center">

            <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-stone-900 to-green-950 max-[700px]:flex-col"> {/* Container */}
                <div className="h-3/5 w-1/4 bg-gray-200 rounded-l-xl max-[1600px]:w-2/6 max-[1000px]:w-5/12 max-[1000px]:h-1/2 max-[700px]:h-1/3 max-[700px]:rounded-t-xl max-[700px]:rounded-bl-none max-[700px]:w-3/4 max-[700px]:flex max-[700px]:flex-col max-[700px]:items-center max-[700px]:justify-center">
                    <h1 className="text-center pt-10 text-3xl font-MonaSpace font-bold cursor-pointer max-[1300px]:text-2xl max-[1000px]:text-xl max-[700px]:pb-4 max-[700px]:pt-4">Registration</h1>
                    <form className="w-full h-full flex flex-col items-center justify-center max-[700px]:w-3/4 max-[700px]:h-3/4 max-[700px]:grid max-[700px]:grid-cols-2 max-[700px]:grid-rows-3 max-[700px]:gap-4">
                        <input type="text" required placeholder="Username" name="username" onChange={handleChange} value={info.username}
                            className="rounded-2xl text-center text-2xl text-white font-bold py-3 bg-green-900 border-0 mb-6 max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs max-[700px]:m-0" />
                        <input type="text" required placeholder="Facebook link" name="link" onChange={handleChange}
                               value={info.link} className="rounded-2xl text-center text-2xl text-white font-bold py-3 bg-green-900 border-0 mb-6 max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs max-[700px]:m-0" />
                        <input type="email" required placeholder="Email" name="email" onChange={handleChange}
                               value={info.email} className="rounded-2xl text-center text-2xl text-white font-bold py-3 bg-green-900 border-0 mb-6 max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs max-[700px]:m-0" />
                        <input type="password" required placeholder="Password" name="password" onChange={handleChange}
                               value={info.password} className="rounded-2xl text-center text-2xl text-white font-bold py-3 bg-green-900 border-0 mb-6 max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs max-[700px]:m-0" />

                        <button type="submit" className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xl font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:w-1/2 max-[700px]:col-span-2 max-[700px]:mx-auto">Submit</button>
                        <br/>
                    </form>
                </div>

                <div className="w-1/4 h-3/5 bg-green-900 flex flex-col items-center justify-center rounded-r-xl max-[1600px]:w-2/6 max-[1000px]:w-5/12 max-[1000px]:h-1/2 max-[700px]:h-1/3 max-[700px]:w-3/4 max-[700px]:rounded-b-xl max-[700px]:rounded-tr-none">
                    <p className="p-6 text-2xl text-white max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs"><span className="font-bold">Name:</span> {info.username}</p>
                    <p className="p-6 text-2xl text-white max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs"><span className="font-bold">Facebook link:</span> {info.link}</p>
                    <p className="p-6 text-2xl text-white max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs"><span className="font-bold">Email:</span> {info.email}</p>
                    <p className="p-6 text-2xl text-white max-[1300px]:text-base max-[1000px]:text-sm max-[700px]:text-xs"><span className="font-bold">Password:</span> {info.password}</p>
                </div>
            </div>
        </section>
    )
}

export default RegisterComponent;