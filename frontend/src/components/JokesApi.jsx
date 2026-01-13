import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const JokesApi = () => {
  const [joke, setJokes] = useState("");
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);
  const fetchJokes = async () => {
    try {
      setClick(false);
      const res = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?type=single"
      );
      console.log(res.data.joke);
      setLoading(true);
      setJokes(res.data.joke);
      setClick(true);
    } catch (error) {
      toast.error("Can't fetch Jokes");
      console.log("Jokes from the Joke Api", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJokes();
  }, []);
  return (
    <div className="m-2.5 p-2.5 justify-between items-center">
      <div className="text-xl text-primary font-mono ">☕ Break Time</div>
      <div>
        <div className="flex-1 flex  items-center justify-center text-xl text-primary font-mono">
          {loading && <span className="text-gray-400">Loading joke...</span>}

          {!loading && <span>{joke}</span>}
        </div>
        <div className="flex items-center justify-center">
          <button onClick={fetchJokes} className="btn btn-primary margin m-4">
            {!click ? "Wait" : "New Joke"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokesApi;
