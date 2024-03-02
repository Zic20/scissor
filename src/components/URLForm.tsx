import { useRef } from "react";
import "../components/urlform.css";
import useFetch from "../hooks/useFetch";
const URLForm = () => {
  const urlRef = useRef<HTMLInputElement>(null);
  const { sendRequest } = useFetch();


  const onFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredURl = urlRef.current!.value;
    if (enteredURl?.trim().length === 0) {
      alert("Please enter a url");
      return;
    }

    sendRequest(
      {
        method: "POST",
        body: JSON.stringify({ActualUrl: enteredURl})
      },
      (data) => {
        console.log(data);
      }
    );
  };
  return (
    <form className="urlForm" onSubmit={onFormSubmitHandler}>
      <input ref={urlRef} id="url" type="url" placeholder="Paste URL here..." />
      <div>
        {/* <select>
          <option selected>Choose Domain</option>
        </select> */}
        {/* <input type="text" placeholder="Type Alias here" /> */}
      </div>
      <input type="url" name="" readOnly id="" />
      <button type="submit" className="btn btn-primary">
        Trim URL &nbsp; <i className="bi bi-magic"></i>
      </button>
      <p className="terms">
        By clicking TrimURL, I agree to the <strong>Terms of Service</strong>,
        <br />
        <strong>Privacy Policy</strong> and Use of Cookies.
      </p>
    </form>
  );
};

export default URLForm;
