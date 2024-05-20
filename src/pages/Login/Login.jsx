import iconSamba from "../../assets/iconSamba.svg"
import { Link} from "react-router-dom";

export default function Login(){
    return(
        <section className="flex flex-col items-center justify-center h-screen bg-customServer font-secular">
            <div className="bg-white w-[520px] h-[520px] flex flex-col items-center">
                <h1 className="text-[32px] mt-14">Bienvenid@ a Samba Server!</h1>
                <div className=" flex flex-col items-center">
                    <img src={iconSamba} alt="" className="w-[100px] h-[100px] mt-10" />
                    <div>
                        <h4 className="text-base mt-3" >User</h4>
                        <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your username"
                        className="w-64 mt-3 border-b-[1px] border-r-[1px] border-customBlack rounded-lg focus:outline-none p-1 font-roboto text-sm"
                        />
                        <h4 className="text-base mt-5" >Password</h4>
                        <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        className="w-64 mt-3 border-b-[1px] border-r-[1px] border-customBlack rounded-lg focus:outline-none p-1 font-roboto text-sm"
                        />
                    </div>
                </div>
                <Link to={"/Navbar/Start-Up"} className="bg-customHover font-roboto mt-8 w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center">
                <p>Login</p>
                </Link>
            </div>
        </section>
    );
}