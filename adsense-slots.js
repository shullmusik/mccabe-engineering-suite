(() => {
  const ADSENSE_CLIENT = "ca-pub-4385674173453758";
  const HORIZONTAL_SLOT = "6787353861";
  const RECTANGLE_SLOT = "4217030848";

  function mountAds() {
    // AdSense ads are intentionally excluded from PDF/export modal windows.
    document
      .querySelectorAll("#exportModal .ad-box, #adModal .ad-slot, #pdfModal .ad-box")
      .forEach((placeholder) => placeholder.remove());

    document.querySelectorAll(".ad-box, .ad-slot").forEach((container) => {
      if (container.querySelector(".adsbygoogle")) return;

      const label = (container.textContent || "").toLowerCase();
      const slot = label.includes("728")
        ? HORIZONTAL_SLOT
        : label.includes("300")
          ? RECTANGLE_SLOT
          : null;

      if (!slot) return;

      container.textContent = "";
      container.setAttribute("aria-label", "Publicidad");
      container.classList.add("overflow-hidden");

      const ad = document.createElement("ins");
      ad.className = "adsbygoogle";
      ad.style.display = "block";
      ad.setAttribute("data-ad-client", ADSENSE_CLIENT);
      ad.setAttribute("data-ad-slot", slot);
      ad.setAttribute("data-ad-format", "auto");
      ad.setAttribute("data-full-width-responsive", "true");
      container.appendChild(ad);

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.warn("AdSense no pudo inicializar este espacio.", error);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountAds, { once: true });
  } else {
    mountAds();
  }
})();
