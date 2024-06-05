
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";


const SingleUserPage = async({params}) => {
  const {id} = params
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
   
     
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>Is Admin: {user.isAdmin ? "Yes" : "No"}</p>
      <p>Is Active: {user.isActive ? "Yes" : "No"}</p>
   
  </div>
  
  );
};

export default SingleUserPage;
