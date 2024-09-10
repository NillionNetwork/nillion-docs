import React, { useEffect } from "react";

const InstallToCreateTracking = () => {
  useEffect(() => {
    const prevButton = document.querySelector('[aria-label="Previous"]');
    const nextButton = document.querySelector('[aria-label="Next"]');

    const handlePrevClick = () => {
      safary.track({
        eventType: "custom",
        eventName: "quickstart_install_previous",
        parameters: {
          fromPage: "Install Nillion",
          toPage: "Blind App Quickstart",
        },
      });
    };

    const handleNextClick = () => {
      safary.track({
        eventType: "custom",
        eventName: "quickstart_install_next",
        parameters: {
          fromPage: "Install Nillion",
          toPage: "Create a Nada project",
        },
      });
    };

    if (prevButton) prevButton.addEventListener("click", handlePrevClick);
    if (nextButton) nextButton.addEventListener("click", handleNextClick);

    return () => {
      if (prevButton) prevButton.removeEventListener("click", handlePrevClick);
      if (nextButton) nextButton.removeEventListener("click", handleNextClick);
    };
  }, []);

  return null;
};

export default InstallToCreateTracking;
