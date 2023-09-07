export default function AdminDashboard() {
  return (
    <>
      <section className="w-full flex flex-wrap flex-row min-h-screen bg-gray-600">
        <div className="w-full xl:w-2/12 text-center pt-4 bg-gray-300">
          Dashboard Navigation
        </div>
        <div className="w-full xl:w-10/12 text-center flex flex-wrap">
          <div className="xl:w-6/12 text-center bg-gray-100">1</div>
          <div className="xl:w-6/12 text-center bg-gray-200">2</div>
          <div className="xl:w-6/12 text-center bg-gray-500">3</div>
          <div className="xl:w-6/12 text-center bg-gray-600">4</div>
        </div>
      </section>
    </>
  );
}
