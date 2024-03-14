import Nav from "../components/Nav";
import URLForm from "../components/URLForm";
import LinkListItem from "../components/LinkListItem";
import { useEffect, useState } from "react";
import RecentLink from "../modules/RecentLink";
import { useAuth } from "../firebase/auth";
import { toast } from "react-toastify";
import { CircularProgress, Pagination } from "@mui/material";

const Links = () => {
  const [recentLinks, setRecentLinks] = useState<RecentLink[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { authUser } = useAuth();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLinks = recentLinks.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    async function fetchData() {
      if (!authUser?.uid) {
        return;
      }
      setIsLoading(true);
      const response = await fetch(
        `http://localhost/shorts/api/shorturl?key=${authUser?.uid}`
      );
      if (!response.ok) {
        toast.error("Network error!");
        return;
      }

      const responseData = await response.json();
      if (!responseData.status) {
        toast.info(responseData.message || "Can't fetch data at the moment");
        return;
      }

      const { urls } = responseData;
      setRecentLinks(urls);
      setIsLoading(false);
    }

    fetchData();
  }, [authUser?.uid]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Nav />

      <div className="lg:w-11/12 lg:rounded-md lg:mx-auto justify-between flex flex-wrap">
        <URLForm />
        <div className="lg:w-8/12 w-full border-black">
          {isLoading && <CircularProgress className="mx-auto block" />}

          {currentLinks.length > 0 &&
            currentLinks.map((recentLink) => {
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

          <Pagination
            count={Math.ceil(recentLinks.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
          />
        </div>
      </div>
    </>
  );
};

export default Links;
