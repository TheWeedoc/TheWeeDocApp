import React from "react";
import "./Uploadstyle.css";
import Verifyseccard from "../cards/Uploadpage/VerifysecCard";
import { useSelector } from "react-redux";

function RejectedSection() {
  const { rejected } = useSelector((state) => state.uploads);

  return (
    <div className="rejectpagemainDiv ">
      <h3 className="verifiedHeadin pt-2 pb-9 ">Rejected Films</h3>

      {rejected.count === 0 ? (
        <div className="text-white text-center py-9">No Results Found</div>
      ) : (
        rejected.results?.map((item) => {
          return (
            <div
              key={item.id}
              className="rejectedmainDiv flex flex-col md:flex-row w-full"
            >
              <Verifyseccard item={item} lastUpdate={item.created_at} />
              <div className="reject_reason_div w-full">
                <b>Reason For Rejection</b>
                <ol type="1" className="reject_reason_lists w-full">
                  <li>
                    Loreum Ipsum Loreum IpsumLoreum IpsumLoreum IpsumLoreum
                    IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum
                    IpsumLoreum IpsumLoreum Ipsum
                  </li>
                </ol>
              </div>
            </div>
          );
        })
      )}
      {/* Advertisement */}
      {/* <div>
        <h3 className="verifiedHeadin pt-2">Rejected Advertisement</h3>

        {cardarr?.map((item, i) => {
          return (
            <div
              key={i}
              className="rejectedmainDiv flex flex-col md:flex-row w-full"
            >
              <Verifyseccard item={item} />
              <div className="reject_reason_div w-full">
                <b>Reason For Rejection</b>
                <ol type="1" className="reject_reason_lists w-full">
                  <li>
                    Loreum Ipsum Loreum IpsumLoreum IpsumLoreum IpsumLoreum
                    IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum
                    IpsumLoreum IpsumLoreum Ipsum
                  </li>
                  <li>
                    Loreum Ipsum Loreum IpsumLoreum IpsumLoreum IpsumLoreum
                    IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum
                    IpsumLoreum IpsumLoreum Ipsum
                  </li>
                </ol>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default RejectedSection;
