import LoadingSpinner from "@/components/element/LoadingSpinner";
import { useCallback, useState } from "react";

const useLoadingSpinner = () => {
  const [load, setLoad] = useState(false);

  const loading = useCallback(
    () => {
      setLoad(true);
    }, [setLoad]
  )

  const stopLoading = useCallback(
    () => {
      setLoad(false);
    }, [setLoad]
  )

  const LoadingSpinnerElement = useCallback(
    () => {
      if (!load) return <div/>;
      return <LoadingSpinner />;
    }, [load]
  );

  return { loading, stopLoading, LoadingSpinnerElement };
}

export default useLoadingSpinner;