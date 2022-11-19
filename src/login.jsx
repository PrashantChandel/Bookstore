import { signInWithGoogle } from "./firebase/utils";
export default function login(){

    const handleclick = (e)=>{
        e.preventDefault()
        console.log("Here")
        signInWithGoogle();

    }

    return(
        <>
            <div  className="flex justify-centre">
                <button className="btn flex bg-slate-500 justify-center w-52 max-w-sm" onClick={(e) => handleclick(e)} >Login</button>
            </div>
        </>
    )
}