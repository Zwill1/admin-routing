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
                className="flex justify-center p-4 mt-2 mb-2"
              >
                <div className="w-10/12 flex items-center justify-center bg-gray-200">
                  <p className="p-2"><img src={item.car_image} style={{width: "75px", height: "75px"}} /></p>
                  <div className="p-2">
                    <p><h4 className="font-bold uppercase">{item.car_brand} / {item.car_model} / {item.car_year}</h4></p>
                    <p className="italic font-semibold">{item.car_price}</p>
                    <p>{item.car_sold} Cars sold</p>
                  </div>
                </div>
              </div>
            ))}
      </section>
    </>
  );
}
