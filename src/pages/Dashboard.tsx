import { Link, Link2, MousePointer } from "lucide-react";
import Nav from "../components/Nav";
import DashboardCard from "../components/DashboardCard";
import URLForm from "../components/URLForm";
import LinkListItem from "../components/LinkListItem";
import { useEffect, useState } from "react";
import RecentLink from "../modules/RecentLink";
import DashboardData from "../modules/DashboardData";

const Dashboard = () => {
  const [recentLinks, setRecentLinks] = useState<RecentLink[]>([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalLinks, setTotalLinks] = useState(0);
  const [linksThisMonth, setLinksThisMonth] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost/shorts/api/dashboard");
      if (!response.ok) {
        alert("Something went wrong");
        return;
      }

      const responseData: DashboardData = await response.json();
      if (!responseData.status) {
        alert("Something isn't right");
        return;
      }
      const {
        data: { RecentLinks, TotalClicks, LinksThisMonth, TotalLinks },
      } = responseData;
      setRecentLinks(RecentLinks);
      setTotalClicks(TotalClicks);
      setTotalLinks(TotalLinks);
      setLinksThisMonth(LinksThisMonth);
    }

    fetchData();
  }, []);
  return (
    <>
      <Nav />
      <div className="bg-white lg:w-11/12 lg:rounded-md lg:mx-auto my-10 p-8 flex lg:flex-nowrap flex-wrap gap-1 place-content-center shadow-md border">
        <DashboardCard
          className="bg-gradient-to-bl from-cyan-200 to-cyan-400"
          heading="ALL URLS"
          value={totalLinks}
        >
          <Link className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-violet-400 to-purple-300"
          heading="TOTAL CLICKS"
          value={totalClicks}
        >
          <MousePointer className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-sky-400 to-blue-500"
          heading="LINKS ADDED THIS MONTH"
          value={linksThisMonth}
        >
          <Link2 className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-green-200 to-blue-500"
          heading="ALL URLS"
          value={30}
        >
          <Link className="text-black" />
        </DashboardCard>
      </div>

      <div className="lg:w-11/12 lg:rounded-md lg:mx-auto justify-between flex flex-wrap">
        <URLForm />
        <div className="lg:w-8/12 w-full border-black">
          {recentLinks.map((recentLink) => {
            const { Title, ActualUrl, id, created_at, clicks, ShortUrl } =
              recentLink;
            return (
              <LinkListItem
                key={id}
                Title={Title}
                clicks={clicks}
                ActualURl={ActualUrl}
                date={created_at}
                ShortUrl={ShortUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
