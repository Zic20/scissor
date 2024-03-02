import {
  Link,
  Link2,
  MousePointer
} from "lucide-react";
import Nav from "../components/Nav";
import DashboardCard from "../components/DashboardCard";
import URLForm from "../components/URLForm";
import LinkListItem from "../components/LinkListItem";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="bg-white lg:w-11/12 lg:rounded-md lg:mx-auto my-10 p-8 flex lg:flex-nowrap flex-wrap gap-1 place-content-center shadow-md border">
        <DashboardCard
          className="bg-gradient-to-bl from-cyan-200 to-cyan-400"
          heading="ALL URLS"
          value={30}
        >
          <Link className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-violet-400 to-purple-300"
          heading="TOTAL CLICKS"
          value={5}
        >
          <MousePointer className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-sky-400 to-blue-500"
          heading="LINKS ADDED THIS MONTH"
          value={0}
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
          <LinkListItem/>
          <LinkListItem/>
          <LinkListItem/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
