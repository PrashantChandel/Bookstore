import { signInWithGoogle } from "../../firebase/utils";
import SignIn from "../../Components/Signin/Signin";

export default function login(props) {

    const handleclick = (e) => {
        e.preventDefault()
        console.log("Here")
        signInWithGoogle();

    }
    return (
        <>
            {/* <div className="flex justify-center wrapper bg-slate-50 ">
                <div className=" border border-gray-900 max-w-min my-20">
                    <div className="mx-10 mt-20 text-center text-xl text-slate-800  ">
                        <span className=" text-4xl mb-2 font-bold pb-2">Bookstore</span>
                        
                        <img src={Library} alt="logo" className="max-h-44 max-w-44 square mx-0 mb-10" />
                        Login with Google
                        
                        <button className="btn bg-slate-500  w-56 mt-2" onClick={(e) => handleclick(e)} >Login </button>
                    </div>
                </div>
            </div> */}
            <SignIn/>

        </>
    )
}