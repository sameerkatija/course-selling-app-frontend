import { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import useAuthStore from "../../store/auth";
import LoadingSpinner from "../../components/Loader";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthStore();
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios({
        method: "get",
        url: "http://localhost:8010/api/admin/users",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
      setLoading(false);
    };
    getUsers();
  }, []);
  console.log(users);
  return (
    <div className=" bg-gray-50 ">
      {loading ? <LoadingSpinner /> : <Table />}
    </div>
  );
};

export default UsersTable;
