import Nav from "../components/Nav";
import URLForm from "../components/URLForm";
import LinkListItem from "../components/LinkListItem";
import { useEffect, useState } from "react";
import RecentLink from "../modules/RecentLink";
import { useAuth } from "../firebase/auth";
import { toast } from "react-toastify";
import { CircularProgress, Pagination } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Plus } from "lucide-react";
import Button from "../components/Button";
const Links = () => {
  const [recentLinks, setRecentLinks] = useState<RecentLink[]>([]);
  const [filteredLinks,setFilteredLinks] = useState<RecentLink[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const { authUser } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentLinks = filteredLinks.slice(indexOfFirstItem, indexOfLastItem);

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (!authUser?.uid) {
        return;
      }
      setIsLoading(true);
      const response = await fetch(
        `https://shorts.zictracks.com/api/shorturl?key=${authUser?.uid}`
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
      setFilteredLinks(urls)
      setIsLoading(false);
    }

    fetchData();
  }, [authUser?.uid]);

  const onDeleteHandler = (id: number) => {
    const filteredLinks = recentLinks.filter((recentLink) => {
      return recentLink.id !== id;
    });

    setRecentLinks(filteredLinks);
  };

  const addToList = (data: RecentLink) => {
    setRecentLinks((prev) => {
      return prev.concat(data);
    });
  };

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let value = e.target.value;
    let res = recentLinks.filter(link => link.Title.toLowerCase().includes(value))
    setFilteredLinks(res)
  }
  return (
    <>
      <Nav />

      <div className="lg:w-11/12 lg:rounded-md lg:mx-auto justify-between flex flex-wrap">
        <Button
          onclick={handleClickOpen("paper")}
          className="btn-primary rounded-sm bg-black flex"
        >
          New Link <Plus className="ml-2" />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogContent dividers={scroll === "paper"}>
            <URLForm className="w-full" updateLinksList={addToList} />
          </DialogContent>
        </Dialog>
        <div className="w-full border-black">
          {isLoading && currentLinks.length < 1 && (
            <CircularProgress className="mx-auto block mt-6" />
          )}
          <input onChange={handleSearchInput} className="focus:outline-none rounded-sm p-2 mt-5 mb-5" type="text" name="" id="" />
          {currentLinks.length > 0 &&
            !isLoading &&
            currentLinks.map((recentLink) => {
              const { Title, ActualUrl, id, created_at, clicks, ShortUrl } =
                recentLink;
              return (
                <LinkListItem
                  id={id}
                  key={id}
                  Title={Title}
                  clicks={clicks}
                  ActualURl={ActualUrl}
                  date={created_at}
                  ShortUrl={ShortUrl}
                  handleDelete={onDeleteHandler}
                />
              );
            })}

          {currentLinks.length > 0 && !isLoading && (
            <Pagination
              className="mb-6"
              count={Math.ceil(filteredLinks.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Links;
