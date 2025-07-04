## Gemini Added Memories


## Project Context for Wow! Taiwan Selects Web Page
This project involves creating an interactive web page to display the "Wow! Taiwan Selects 東南亞巡迴推廣活動深度分析" content.

**Key Features and Design Principles:**
- **Content Source**: The primary content is derived from `原文/WowTaiwanSelects.txt`.
- **Design Aesthetic**:
    - Background: Black
    - Titles: Pure Yellow
    - Content Text: White
    - Fonts: English - Google Inter, Traditional Chinese - Noto Sans TC (思源黑體)
- **Layout & Interactivity**:
    - **Responsive Web Design (RWD)**: Adapts to various screen sizes.
    - **Accordion Effect**: Main sections and "參考資料" are collapsible.
    - **Bento Grids**: Main content sections are structured using Bento Grids for improved readability and visual appeal. Each paragraph is a `bento-item`.
    - **Bolded Sub-headings**: Sub-headings within the Bento Grid items are bolded and styled for prominence.
    - **Image Gallery**: All project images are consolidated into a dedicated "歷年活動回顧" section, displayed in a 4-column grid layout.
    - **Hover Effects**: Interactive hover effects are applied to accordion headers and images.
- **File Structure**:
    - `index.html`: Main HTML structure, incorporating content and layout.
    - `style.css`: Defines the visual styling and layout.
    - `script.js`: Implements interactive functionalities like the accordion effect.
    - `image/`: Directory containing all image assets.
    - `原文/WowTaiwanSelects.txt`: The original text content for the web page.

**Development History & Specific Instructions:**
- The original text from `WowTaiwanSelects.txt` must be fully preserved in the web page.
- Images were extracted from the main content and placed in a new "歷年活動回顧" section, arranged in a 4-photo-per-row grid.
- The main content was refactored into Bento Grids, with each paragraph becoming a `bento-item`.
- Sub-headings within the Bento Grids were made bold and styled.
- The "參考資料" section was made collapsible.
- A new "前言" section was added at the beginning of the main content.
- The Bento Grids for the main content were specifically requested to be vertically stacked (single column).
- The "歷年活動回顧" section should remain unchanged unless explicitly instructed.