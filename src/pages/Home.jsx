export default function Home() {
  return (
    <>
      <section className="w-full flex flex-wrap flex-row min-h-screen bg-gray-600">
        <div className="w-full xl:w-1/2 text-center pt-4 home-bg"></div>
        <div className="w-full xl:w-1/2 text-center pt-4">
          <h1 className="text-3xl font-bold text-white pt-6">How to use this app</h1>
          <p className="px-10 pt-2 text-white">Use the navigation on the top of the website to login your account. You will gain access to charts being loaded by a JSON file and see the top selling products.</p>
          <h2 className="text-3xl font-bold text-white pt-6">How this application works:</h2>
          <p className="px-10 pt-2 text-white">The admin dashboard has its own admin navigation side bar. All JSON data files are loaded directly on the dashboard with loading states to fetch the data. Login form data is prefilled for the ability to showcase the dashboard.</p>
        </div>
      </section>
    </>
  );
}
