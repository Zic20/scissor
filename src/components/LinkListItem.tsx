import React from 'react'
import {
    BarChart,
    Clipboard,
    QrCode,
    Share,
  } from "lucide-react";

const LinkListItem = () => {
  return (
    <div className="bg-white w-full rounded-md p-5 my-5">
            <a href="#">https://localhost/helpme</a>
            <p>January 24, 2025</p>
            <hr className="my-3"/>
            <div>
              <div>
                <a href="#">https://localhost/helpme</a>
                <div className=" mt-3 flex gap-3 justify-between">
                  <div className="flex">
                    <Share />
                    <Clipboard />
                    <QrCode />
                  </div>
                  <div className="border border-blue-700 flex p-2 rounded text-blue-800 font-bold">
                    <BarChart/>
                    <p><span className="bg-blue-800 text-white p-1 rounded">10</span> clicks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default LinkListItem