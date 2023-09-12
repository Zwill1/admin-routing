import AdminNav from "../../components/admin/AdminNav";
import AccordianList from "../../components/admin/AccordianList";
import PieChart from "../../components/admin/PieChart";

export default function AdminDashboard() {
  return (
    <>
      <section className="w-full flex flex-wrap flex-row min-h-screen bg-gray-600">
        <div className="w-full xl:w-2/12 bg-gray-300">
          <AdminNav />
        </div>
        <div className="w-full xl:w-10/12 text-center flex flex-wrap">
          <div className="w-full xl:w-6/12 text-center bg-gray-100 pt-4">
            <AccordianList />
          </div>
          <div className="w-full xl:w-6/12 text-center bg-gray-200 pt-4">
            <PieChart />
          </div>
          <div className="w-full xl:w-6/12 text-center bg-gray-500 pt-4">3</div>
          <div className="w-full xl:w-6/12 text-center bg-gray-600 pt-4">4</div>
        </div>
      </section>
    </>
  );
}
