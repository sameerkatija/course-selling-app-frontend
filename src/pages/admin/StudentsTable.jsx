import { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import useAuthStore from "../../store/auth";
import LoadingSpinner from "../../components/Loader";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthStore();
  useEffect(() => {
    const getStudents = async () => {
      const res = await axios({
        method: "get",
        url: "http://localhost:8010/api/admin/students",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(res.data);
      setLoading(false);
    };
    getStudents();
  }, []);
  console.log(students);
  return (
    <div className=" bg-gray-50 ">
      {loading ? <LoadingSpinner /> : <Table />}
    </div>
  );
};

export default StudentsTable;
