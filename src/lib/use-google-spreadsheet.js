import { useEffect, useState } from "react";
import axios from "axios";

const googleKey = process.env.GATSBY_GOOGLE_API_KEY

const useGoogleSpreadsheet = API_KEY => {
  const [state, setState] = useState({ valueRanges: null, isFetching: false });
  useEffect(() => {
    const source = axios.CancelToken.source();
    const handleFetch = async () => {
      const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/11_mJNLlHL-rGyrgIYL9eFKTC44qs9347TLRLtNSNThw/values:batchGet?ranges=Standings!A1%3AI5&ranges=Overview!A1%3AG47&access_token=${googleKey}&key=${googleKey}`;
      setState({ rows: null, isFetching: true });
      try {
        const { data } = await axios.get(endpoint, {
          cancelToken: source.token
        });
        const { valueRanges } = data;
        setState({ valueRanges, isFetching: false });
      } catch (err) {
        setState({ valueRanges: null, isFetching: false });
      }
    };
    handleFetch(!API_KEY);
    return () => source.cancel("cancelled by useEffect cleaning");
  }, [API_KEY]);
  return state;
};

export default useGoogleSpreadsheet;
