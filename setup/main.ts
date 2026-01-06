import { defineAppSetup } from "@slidev/types";

export default defineAppSetup(({ router }) => {
  // Only run in browser
  if (typeof window === "undefined") return;

  // 1. Inject Styles for Copy Button and Custom Line Numbers
  const styleId = "slidev-custom-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      /* --- Custom Copy Button Styles --- */
      .slidev-code {
        position: relative !important;
        overflow: hidden !important; /* Fix for scrollbar appearing due to absolute button */
      }
      .slidev-code:hover {
        overflow: auto !important; /* Re-enable scroll on hover if needed */
      }
      .slidev-code:hover .custom-copy-btn {
        opacity: 1;
      }
      .custom-copy-btn {
        position: absolute;
        top: 0.3rem; 
        right: 0.3rem;
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5rem;   /* Reduced from 2rem */
        height: 1.5rem;  /* Reduced from 2rem */
        padding: 0.3rem; /* Reduced from 0.4rem */
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid #e5e7eb;
        border-radius: 0.375rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s, background-color 0.2s;
        color: #6b7280;
      }
      .custom-copy-btn:hover {
        background-color: #f3f4f6;
        color: #374151;
      }
      .custom-copy-btn.copied {
        color: #10b981; /* Green success color */
        border-color: #10b981;
      }

      /* --- Custom Line Numbers Styles --- */
      /* This assumes Shiki renders lines as elements with class 'line' 
         If standard config fails, we force our own counters */
      .slidev-code code {
        counter-reset: step;
      }
      .slidev-code .line {
        position: relative;
        padding-left: 2rem; /* Make space for numbers */
      }
      /* Only apply if the line doesn't already have a number inside it */
      .slidev-code .line::before {
        content: counter(step);
        counter-increment: step;
        position: absolute;
        left: 0;
        top: 0;
        width: 1.5rem;
        text-align: right;
        font-size: 0.75rem;
        color: #9ca3af;
        opacity: 0.7;
        user-select: none; /* Prevent selection when copying */
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Logic to add Copy Buttons
  const addCopyButtons = () => {
    const codeBlocks = document.querySelectorAll(".slidev-code");

    codeBlocks.forEach((block) => {
      // Avoid duplicates
      if (block.querySelector(".custom-copy-btn")) return;

      const button = document.createElement("button");
      button.className = "custom-copy-btn";
      button.title = "Copy to clipboard";
      // Clipboard Icon
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      `;

      button.addEventListener("click", async () => {
        try {
          // Get text content.
          // Note: .line::before (line numbers) are pseudo-elements and won't be in innerText.
          const code = block.querySelector("code");
          const text = code ? code.innerText : block.innerText;

          await navigator.clipboard.writeText(text);

          // Success State
          button.classList.add("copied");
          // Checkmark Icon
          button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          `;

          setTimeout(() => {
            button.classList.remove("copied");
            // Revert to Clipboard Icon
            button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            `;
          }, 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      });

      block.appendChild(button);
    });
  };

  // 3. Watch for DOM changes to handle slide navigation
  const observer = new MutationObserver(() => {
    addCopyButtons();
  });

  // Start observing
  const targetNode = document.getElementById("app") || document.body;
  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });

  // Initial run
  setTimeout(addCopyButtons, 500);
});
