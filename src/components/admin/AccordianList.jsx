import { useEffect, useState } from "react";
import axios from "axios";
// import data from "../admin/Data/AccordianListData";

export default function AccordianList() {
  const [apiData, setApiData] = useState(null);

  // When getting data, set useeffect to "loading".

  useEffect(() => {
    axios.get("src/components/admin/Data/AccordianListData.js").then((res) => {
      setApiData(res.data);

      // Need to catch any errors if cannot get API data.

      // Set "loading" to false.
    });
  }, []);
  console.log("Running this outside use effect. " + apiData);

  return (
    <>
      <section>
        <div className="flex justify-center bg-gray-500 p-4 mt-2 mb-2">
          <p className="p-2">Image thumbnail</p>
          <div className="p-2">Accordian List Info</div>
        </div>
        <div className="flex justify-center bg-gray-500 p-4 mt-2 mb-2">
          <p className="p-2">Image thumbnail</p>
          <div className="p-2">Accordian List Info</div>
        </div>
        <div className="flex justify-center bg-gray-500 p-4 mt-2 mb-2">
          <p className="p-2">Image thumbnail</p>
          <div className="p-2">Accordian List Info</div>
        </div>
        <div className="flex justify-center bg-gray-500 p-4 mt-2 mb-2">
          <p className="p-2">Image thumbnail</p>
          <div className="p-2">Accordian List Info</div>
        </div>
      </section>
    </>
  );
}
