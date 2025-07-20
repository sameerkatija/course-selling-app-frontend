import { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import useAuthStore from "../../store/auth";
import LoadingSpinner from "../../components/Loader";

const TeachersTable = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthStore();
  useEffect(() => {
    const getTeachers = async () => {
      const res = await axios({
        method: "get",
        url: "http://localhost:8010/api/admin/teachers",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTeachers(res.data);
      setLoading(false);
    };
    getTeachers();
  }, []);
  console.log(teachers);
  return (
    <div className=" bg-gray-50 ">
      {loading ? <LoadingSpinner /> : <Table />}
    </div>
  );
};

export default TeachersTable;
