import HeaderLine from "../../components/SectionHeaderline/HeaderLine";
import add from "../../assets/add.svg";
import remove from "../../assets/delete.svg";
import Button from "../../components/Buttons/Button.jsx";
import FooterButtonsUsers from "../../components/Buttons/FooterButtonsUsers";
import { helpTextUser } from "../../utils/helpText.js";
import AddUser from "../../modals/AddUser.jsx";
import UserTable from "../../components/Table/UserTable.jsx";
import { useState, useEffect } from "react";
import { fetchGetUser, fetchDeleteUser } from "../../utils/api.js";
export default function Users(){
    const [modalAddUser, setModalAddUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getUsers(){
            try {
                const data = await fetchGetUser();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching Samba users:", error);
                setLoading(false);
            }finally {
                setLoading(false);
            }
        }
        getUsers()
      }, []);
    
    const handleDeleteUser = async (username) => {
        try {
          await fetchDeleteUser(username);
          setUsers((prevUsers) => prevUsers.filter((user) => user !== username));
        } catch (error) {
          console.error("Error deleting user:", error);
        }
    };
    if (loading) {
        return <div>Loading...</div>;
    }
    return(
        <section className="mt-14 py-14 px-10 bg-white h-screen">
            <AddUser isOpen={modalAddUser} onClose={() => setModalAddUser(false)}/>
            <HeaderLine text="Samba Users" />
            <div className="w-full flex flex-col justify-center items-center">
                <UserTable users={users} onDelete={handleDeleteUser}/>
                <div className="flex justify-evenly w-64 mt-10">
                        <Button text={"Add"} image={add} onClick={() => setModalAddUser(true)} />
                        <Button text={"Delete"} image={remove}/>
                </div>
            </div>
            <FooterButtonsUsers title={helpTextUser.title} description={helpTextUser.description}/>
        </section>
    );
}