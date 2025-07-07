## Gemini Added Memories

## Project Context for Wow! Taiwan Selects Web Page
This project involves creating an interactive web page to display the "Wow! Taiwan Selects 東南亞巡迴推廣活動深度分析" content.

**Key Features and Design Principles:**
- **Content Source**: The primary content is derived from `原文/WowTaiwanSelects.txt`.
- **Design Aesthetic**:
    - Background: Black (`#111111`)
    - Titles: Yellow (`#ffff00`)
    - Content Text: White (`#ffffff`)
    - Fonts: `Noto Sans TC`, sans-serif
    - Generous whitespace (padding/margin around text blocks, increased line-height and paragraph spacing).
    - No box-shadows, gradients, or border-radius.
    - Subtle hover and scroll animations.
- **Layout & Interactivity**:
    - **Responsive Web Design (RWD)**: Adapts to various screen sizes.
    - **Single-Column Layout**: A modern, single-column, magazine-style layout for immersive reading.
    - **Image Grids**: All project images are arranged in perfectly aligned, non-jagged grids, interspersed between text sections for a clean and professional look.
    - **Hover Effects**: Images gently scale up on hover, providing subtle user feedback.
    - **Scroll Animation**: Content sections fade in smoothly as the user scrolls, enhancing the premium feel of the page.
- **File Structure**:
    - `index.html`: The single file containing the structure, styling (via TailwindCSS), and all interactive scripts.
    - `image/`: Directory containing all 20 image assets (renamed to descriptive ASCII filenames).
    - `原文/WowTaiwanSelects.txt`: The original text content for the web page.

**Development History & Specific Instructions:**
- The project underwent several iterations. The initial multi-column and bento-grid approaches were discarded in favor of a cleaner, single-column narrative flow.
- Key user instructions that shaped the final design included:
    1.  Updated color scheme to yellow titles, white text on a black background.
    2.  Adjusted font sizes for body text (14px), main section titles (h2: 2.25rem), and sub-section titles (h3: 1.4rem).
    3.  Ensured main title and subtitle are centered.
    4.  Added line breaks between the introductory paragraph and the first section, and before the "參考資料" section.
    5.  Updated the subtitle to "東南亞巡迴推廣活動".
    6.  Using the full text from `原文/WowTaiwanSelects.txt` and presenting it according to its original paragraph structure.
    7.  Ensuring all images are used and arranged in perfectly neat grids.
    8.  Adding subtle hover and scroll animations.
    9.  Renaming image files to be more descriptive (completed, now using ASCII filenames).
    10. Ensuring RWD for all devices.
    11. Reference list formatted as 1.2.3.4 without repetition (completed).