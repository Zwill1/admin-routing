import useFetch from "./hooks/useFetch";

export default function AccordianList() {
  const { data, loading, error } = useFetch(
    "src/components/admin/Data/AccordianListData.json"
  );

  // When getting data, set to "loading".
  if (loading) return <h1>Loading data...</h1>;

  if (data === null)
    return <div>No data available. Please try again later.</div>;

  // Return error in console if one shows up
  if (error) console.log("there is an error " + error);

  console.log("this is the data ", data);
  console.log("testing data " + data);

  return (
    <>
      <section>
        <h2 className="text-3xl font-bold">Top 5 rated best selling:</h2>
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex justify-center bg-gray-500 p-4 mt-2 mb-2"
            >
              <p className="p-2"><img src={item.car_image} style={{width: "75px", height: "75px"}} /></p>
              <div className="p-2">
                {item.car_brand} / {item.car_model}
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
