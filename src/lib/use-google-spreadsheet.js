import { useEffect, useState } from "react";
import axios from "axios";

const useGoogleSpreadsheet = API_KEY => {
  const [state, setState] = useState({ rows: null, isFetching: false });
  useEffect(() => {
    const source = axios.CancelToken.source();
    const handleFetch = async () => {
      const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/1F5Dr7jXlgCGaa9Ei5SSMP_calnmB4j-EK8k4QrLIjaQ/values:batchGet?&ranges=A1%3AI5&access_token=AIzaSyDWtp4gWd-POH7YFbZIt5YiO4myypwc-vg&key=AIzaSyDWtp4gWd-POH7YFbZIt5YiO4myypwc-vg`;
      setState({ rows: null, isFetching: true });
      try {
        const { data } = await axios.get(endpoint, {
          cancelToken: source.token
        });
        const rows = data.valueRanges?.[0]?.values;
        setState({ rows, isFetching: false });
      } catch (err) {
        setState({ rows: null, isFetching: false });
      }
    };
    handleFetch(!API_KEY);
    return () => source.cancel("cancelled by useEffect cleaning");
  }, [API_KEY]);
  return state;
};

export default useGoogleSpreadsheet;
