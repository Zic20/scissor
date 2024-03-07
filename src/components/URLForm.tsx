import { useRef, useState } from "react";
import "../components/urlform.css";
import useFetch from "../hooks/useFetch";
import PostResponse from "../modules/PostResponse";
import Button from "./Button";
const URLForm = () => {
  const [shortUrl, setShortUrl] = useState("");
  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const aliasRef = useRef<HTMLInputElement>(null);

  const { sendRequest } = useFetch();

  const onFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredURl = urlRef.current!.value;
    const urlTitle = titleRef.current!.value;

    if (enteredURl?.trim().length === 0) {
      alert("Please enter a url");
      return;
    }

    if (urlTitle?.trim().length === 0) {
      alert("Please enter a Title");
      return;
    }

    const requestBody = {
      ActualUrl: enteredURl.trim(),
      Title: urlTitle.trim(),
      custom_alias: aliasRef.current?.value.trim(),
    };

    const processData = (data: PostResponse): void => {
      const {
        url: { ShortenedUrl },
      } = data;
      if (ShortenedUrl.length > 0) setShortUrl(ShortenedUrl);
    };

    sendRequest(
      { method: "POST", body: JSON.stringify(requestBody) },
      processData
    );
  };
  return (
    <form className="urlForm" onSubmit={onFormSubmitHandler}>
      <input ref={urlRef} id="url" type="url" placeholder="Paste URL here..." />
      <div>
        <input ref={titleRef} type="text" placeholder="Title" />
        <input ref={aliasRef} type="text" placeholder="Type Alias here" />
      </div>
      <input type="url" value={shortUrl} name="" readOnly id="" />
      <Button className="btn-primary">
        Trim URL &nbsp; <i className="bi bi-magic"></i>
      </Button>
      <p className="terms">
        By clicking TrimURL, I agree to the <strong>Terms of Service</strong>,
        <br />
        <strong>Privacy Policy</strong> and Use of Cookies.
      </p>
    </form>
  );
};

export default URLForm;
