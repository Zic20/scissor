import { BarChart, Clipboard, QrCode, Share } from "lucide-react";
import React from "react";
import { DateTimeFormatOptions } from "intl";

const LinkListItem: React.FC<{
  Title: string;
  ActualURl: string;
  date: string;
  ShortUrl: string;
  clicks: number;
}> = (props) => {
  const { Title, ActualURl, date, ShortUrl, clicks } = props;
  const config: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatedDate = new Date(date).toLocaleDateString("en-US", config);

  const isShareSupported = typeof navigator.share === "function";

  const handleCopyToClipBoard = async () => {
    await navigator.clipboard.writeText(ShortUrl);
  };

  const handleShareUrl = async () => {
    await navigator.share({
      url: ShortUrl,
    });
  };
  return (
    <div className="bg-white w-full rounded-md p-5 my-5">
      <h4 className="font-bold mb-4">{Title}</h4>
      <a
        className="text-blue-700 hover:text-blue-900"
        href={ActualURl}
        target="__blank"
      >
        {ActualURl}
      </a>
      <p>{formatedDate}</p>
      <hr className="my-3" />
      <div>
        <div>
          <a href={ShortUrl} target="__blank">
            {ShortUrl}
          </a>
          <div className=" mt-3 flex gap-3 justify-between">
            <div className="flex gap-4">
              {isShareSupported && (
                <Share
                  className="hover:text-blue-800"
                  onClick={handleShareUrl}
                />
              )}
              <Clipboard
                className="hover:text-blue-800"
                onClick={handleCopyToClipBoard}
              />
              <QrCode />
            </div>
            <div className="border border-blue-700 flex p-2 rounded text-blue-800 font-bold">
              <BarChart />
              <p>
                <span className="bg-blue-800 text-white p-1 rounded">
                  {clicks}
                </span>{" "}
                clicks
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* main div ends here */}
    </div>
  );
};

export default LinkListItem;
