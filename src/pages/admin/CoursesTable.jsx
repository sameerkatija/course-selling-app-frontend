import { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import useAuthStore from "../../store/auth";
import LoadingSpinner from "../../components/Loader";

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthStore();
  useEffect(() => {
    const getCourses = async () => {
      const res = await axios({
        method: "get",
        url: "http://localhost:8010/api/admin/courses",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(res.data);
      setLoading(false);
    };
    getCourses();
  }, []);
  console.log(courses);
  return (
    <div className=" bg-gray-50 ">
      {loading ? <LoadingSpinner /> : <Table />}
    </div>
  );
};

export default CoursesTable;
