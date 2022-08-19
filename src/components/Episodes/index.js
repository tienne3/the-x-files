import StartWatching from "../StartWatching";
import { SeasonAll } from "./SeasonAll";

import { useState, useEffect } from "react";

function Episodes() {
  const [modalStartWatching, setModalStartWatching] = useState(false);

  // đóng, mở start watching
  const handleStartWatching = () => {
    setModalStartWatching(!modalStartWatching);
  };
  // đóng start watching
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModalStartWatching(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="mt-10">
      <SeasonAll onClick={handleStartWatching} />
      <div>
        {modalStartWatching && <StartWatching onClick={handleStartWatching} />}
      </div>
    </div>
  );
}

export default Episodes;
