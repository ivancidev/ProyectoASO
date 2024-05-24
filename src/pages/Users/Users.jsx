import HeaderLine from "../../components/SectionHeaderline/HeaderLine";
import add from "../../assets/add.svg";
import remove from "../../assets/delete.svg";
import Button from "../../components/Buttons/Button.jsx";
import FooterButtonsUsers from "../../components/Buttons/FooterButtonsUsers";
import { helpTextUser } from "../../utils/helpText.js";

export default function Users(){
    return(
        <section className="mt-14 py-14 px-10 bg-white h-screen">
            <HeaderLine text="Samba Users" />
            <div className="w-full flex flex-col justify-center items-center">
                <table class="table-auto font-roboto w-60 mt-5">
                    <thead className="h-9">
                        <tr className="bg-customBlack text-sm text-white border border-customBlack">
                        <th className="text-left pl-3">Username</th>
                        </tr>
                    </thead>
                    <tbody className="border-[1px] border-customBlack max-h-40 overflow-y-auto font-roboto">
                        <tr>
                        <td>User1</td>
                        </tr>
                        <tr>
                        <td>User2</td>
                        </tr>
                        <tr>
                        <td>User1</td>
                        </tr>
                        <tr>
                        <td>User2</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-evenly w-64 mt-10">
                        <Button text={"Add"} image={add} route={"/Shares/Add"} />
                        <Button text={"Delete"} image={remove}/>
                </div>
            </div>
            <FooterButtonsUsers title={helpTextUser.title} description={helpTextUser.description}/>
        </section>
    );
}