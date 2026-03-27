# Portfolio Project Interview Sheet

Project focus: React + Vite + Tailwind CSS portfolio application

Format:
- `Q`: Interview question
- `Ideal answer`: Strong technical answer
- `Follow-up`: A likely deeper question
- `Spoken answer`: Short viva-style reply

## Basic 25

1. `Q`: What kind of project is this?
   `Ideal answer`: This is a single-page personal portfolio application built with React. It presents profile information, skills, projects, education, and a contact form in separate sections.
   `Follow-up`: Why did you choose a single-page approach?
   `Spoken answer`: It is a React-based portfolio website with sections like About, Skills, Projects, Education, and Contact.

2. `Q`: Which library is used to build the UI?
   `Ideal answer`: React is the main UI library used in this project.
   `Follow-up`: What React version is used here?
   `Spoken answer`: The UI is built with React.

3. `Q`: Which tool is used for bundling and development?
   `Ideal answer`: Vite is used as the build tool and dev server because it provides fast startup and modern frontend tooling.
   `Follow-up`: Why is Vite preferred over older tooling?
   `Spoken answer`: Vite is used for fast development and production builds.

4. `Q`: Which styling system is used in this app?
   `Ideal answer`: Tailwind CSS is used for utility-first styling, with a small amount of custom CSS in `index.css`.
   `Follow-up`: Where is Tailwind configured?
   `Spoken answer`: Tailwind CSS is used for most styling.

5. `Q`: Where does the application start?
   `Ideal answer`: The app starts from `src/main.jsx`, where `createRoot` renders the `App` component into the root DOM node.
   `Follow-up`: What is the role of `createRoot`?
   `Spoken answer`: The entry point is `src/main.jsx`.

6. `Q`: Which component is the main wrapper of the app?
   `Ideal answer`: `App.jsx` is the top-level component that assembles all major sections.
   `Follow-up`: Which sections does it render?
   `Spoken answer`: `App.jsx` is the main wrapper.

7. `Q`: What sections are included in the app?
   `Ideal answer`: It includes Navbar, About, Skills, Work or Projects, Education, Contact, and Footer.
   `Follow-up`: Is the experience section active?
   `Spoken answer`: The main sections are About, Skills, Projects, Education, Contact, and Footer.

8. `Q`: Where is the portfolio content stored?
   `Ideal answer`: Most reusable content is stored in `src/constants.js`, including skills, education, projects, and the placeholder experience array.
   `Follow-up`: Why is that useful?
   `Spoken answer`: Most content is stored in `src/constants.js`.

9. `Q`: What kind of data is stored in `constants.js`?
   `Ideal answer`: It stores arrays for skill categories, project cards, education timeline entries, and an empty experiences export.
   `Follow-up`: Which component consumes this data?
   `Spoken answer`: It stores project, skill, and education data.

10. `Q`: How is navigation handled in this project?
    `Ideal answer`: Navigation is handled through section IDs and smooth scrolling instead of route-based page navigation.
    `Follow-up`: Which function performs the scroll?
    `Spoken answer`: It uses section scrolling with IDs, not page routing.

11. `Q`: Which section contains the typing animation?
    `Ideal answer`: The About section uses a typing animation to cycle through roles like Fullstack Developer and App Developer.
    `Follow-up`: Which package handles that animation?
    `Spoken answer`: The typing effect is in the About section.

12. `Q`: Which package is used for typing animation?
    `Ideal answer`: The package is `react-typing-effect`.
    `Follow-up`: Why use a library instead of custom code?
    `Spoken answer`: `react-typing-effect` is used.

13. `Q`: Which package is used for tilt effects?
    `Ideal answer`: The project uses `react-parallax-tilt` for the profile image and skill card interactions.
    `Follow-up`: Where do you use tilt in the UI?
    `Spoken answer`: Tilt effects are created with `react-parallax-tilt`.

14. `Q`: Which package provides icons in the app?
    `Ideal answer`: Icons are imported from `react-icons`.
    `Follow-up`: Which icon sets are used?
    `Spoken answer`: Icons come from `react-icons`.

15. `Q`: How is the contact form implemented?
    `Ideal answer`: The contact form uses a React form with `useRef`, and the submit action sends data through EmailJS.
    `Follow-up`: Why is `useRef` needed there?
    `Spoken answer`: The form uses React and sends messages with EmailJS.

16. `Q`: Which package is used for notifications?
    `Ideal answer`: `react-toastify` is used to show success and error messages after form submission.
    `Follow-up`: Where is `ToastContainer` rendered?
    `Spoken answer`: Notifications are shown with `react-toastify`.

17. `Q`: Which React hook is used for component state?
    `Ideal answer`: `useState` is used in multiple components, such as Navbar for menu state and Work for modal state.
    `Follow-up`: Give one example from this project.
    `Spoken answer`: `useState` is used for local UI state.

18. `Q`: Which hook handles side effects in Navbar?
    `Ideal answer`: `useEffect` is used in Navbar to add and clean up the scroll event listener.
    `Follow-up`: Why is cleanup important?
    `Spoken answer`: Navbar uses `useEffect` for scroll handling.

19. `Q`: Which hook accesses the form DOM node?
    `Ideal answer`: `useRef` is used to reference the form element for EmailJS `sendForm`.
    `Follow-up`: Could controlled inputs also be used?
    `Spoken answer`: `useRef` is used for the form reference.

20. `Q`: Where are images and logos stored?
    `Ideal answer`: Images are stored in `src/assets`, with separate folders for tech logos, work logos, education logos, and profile assets.
    `Follow-up`: Why organize assets by category?
    `Spoken answer`: Assets are stored under `src/assets`.

21. `Q`: How are project cards rendered?
    `Ideal answer`: They are rendered by mapping over the `projects` array from `constants.js`.
    `Follow-up`: Why is mapping better than hardcoding?
    `Spoken answer`: Project cards are generated by mapping over project data.

22. `Q`: How are skills rendered?
    `Ideal answer`: The Skills component maps over skill categories and then maps again over skills inside each category.
    `Follow-up`: What categories are present?
    `Spoken answer`: Skills are rendered from categorized data arrays.

23. `Q`: What layout is used in the Education section?
    `Ideal answer`: The Education section uses a timeline-style layout with a central vertical line and alternating content blocks.
    `Follow-up`: How is alternating alignment implemented?
    `Spoken answer`: It uses a timeline layout.

24. `Q`: Is React Router actively used in the current UI?
    `Ideal answer`: No. The dependency exists in `package.json`, but the current app uses section scrolling instead of route navigation.
    `Follow-up`: When would routing be useful here?
    `Spoken answer`: No, the current app does not use route-based navigation.

25. `Q`: Which command runs the app locally?
    `Ideal answer`: `npm run dev` starts the Vite development server.
    `Follow-up`: What command builds production output?
    `Spoken answer`: I run the project with `npm run dev`.

## Medium 25

26. `Q`: Why is storing data in `constants.js` a good design choice?
    `Ideal answer`: It separates content from presentation, reduces duplication, and makes content updates easier.
    `Follow-up`: What is the limitation of this approach as the app grows?
    `Spoken answer`: It keeps content centralized and the UI components cleaner.

27. `Q`: Why is smooth scrolling a good fit for this project?
    `Ideal answer`: Because it is a one-page portfolio, smooth scrolling gives a simple and natural way to move between sections.
    `Follow-up`: What alternative navigation model could be used?
    `Spoken answer`: It fits well because the whole portfolio is on one page.

28. `Q`: How does the project modal work?
    `Ideal answer`: Clicking a project card stores the clicked project object in state, and conditional rendering displays a modal using that state.
    `Follow-up`: How is the modal closed?
    `Spoken answer`: A clicked project is stored in state, and that opens the modal.

29. `Q`: Why is `selectedProject` set to `null` initially?
    `Ideal answer`: `null` clearly means no project is selected, so no modal should be shown.
    `Follow-up`: What other state shape could be used?
    `Spoken answer`: `null` means the modal is closed.

30. `Q`: How does Navbar change while scrolling?
    `Ideal answer`: It tracks scroll position and switches to a blurred dark background with shadow once the page is scrolled past a threshold.
    `Follow-up`: Which state controls this behavior?
    `Spoken answer`: It becomes visually solid after the page is scrolled.

31. `Q`: Why is event listener cleanup necessary in Navbar?
    `Ideal answer`: Cleanup prevents memory leaks and avoids leaving old listeners attached after unmounting.
    `Follow-up`: Where is the cleanup written?
    `Spoken answer`: Cleanup avoids memory leaks and duplicate listeners.

32. `Q`: What is the benefit of the `menuItems` array?
    `Ideal answer`: It lets desktop and mobile menus reuse the same navigation source, improving consistency.
    `Follow-up`: What duplication still exists in the component?
    `Spoken answer`: It keeps navigation data centralized and reusable.

33. `Q`: Why use `.map()` for repeated UI?
    `Ideal answer`: It makes the UI data-driven, easier to maintain, and simpler to extend.
    `Follow-up`: What must each mapped child include?
    `Spoken answer`: It makes repeated UI cleaner and scalable.

34. `Q`: Why are `key` props important in React lists?
    `Ideal answer`: Keys help React identify which list items changed, added, or removed during updates.
    `Follow-up`: What makes a good key?
    `Spoken answer`: Keys help React update list items correctly.

35. `Q`: Why is using index as key not ideal?
    `Ideal answer`: Index keys can lead to unstable rendering behavior if the list is reordered or items are inserted or removed.
    `Follow-up`: Is it acceptable anywhere in this project?
    `Spoken answer`: Index keys are weaker because they are not stable if list order changes.

36. `Q`: What is the role of `createRoot` in React 18?
    `Ideal answer`: It enables the modern root API introduced in React 18 for rendering the app.
    `Follow-up`: What was used before `createRoot`?
    `Spoken answer`: `createRoot` is the React 18 rendering API.

37. `Q`: Why is Tailwind useful for this project?
    `Ideal answer`: Tailwind helps build responsive layouts quickly and keeps most styling close to the component markup.
    `Follow-up`: What is one downside of heavy utility usage?
    `Spoken answer`: Tailwind makes responsive styling faster and more consistent.

38. `Q`: What customizations were added to Tailwind?
    `Ideal answer`: The config extends the theme with a custom `blob` animation and a `skills-gradient` background image.
    `Follow-up`: Where is that animation used?
    `Spoken answer`: Custom animation and background gradient were added in Tailwind config.

39. `Q`: What is the purpose of `BlurBlob`?
    `Ideal answer`: It is a reusable decorative component that renders a large blurred animated circle in the background.
    `Follow-up`: Why keep it as a separate component?
    `Spoken answer`: It creates a reusable animated background effect.

40. `Q`: Why use PropTypes in `BlurBlob`?
    `Ideal answer`: PropTypes help validate expected prop shapes during development and improve component reliability.
    `Follow-up`: How would TypeScript improve this further?
    `Spoken answer`: PropTypes help catch wrong prop shapes in development.

41. `Q`: What happens after successful form submission?
    `Ideal answer`: The form is reset, success state is updated, and a success toast is shown.
    `Follow-up`: Is the success state actually used in the UI?
    `Spoken answer`: The form resets and a success toast appears.

42. `Q`: Why call `preventDefault()` in the form handler?
    `Ideal answer`: It prevents the browser from performing a full page reload on form submit.
    `Follow-up`: What would happen without it?
    `Spoken answer`: It stops the default browser form submission.

43. `Q`: What security concern exists in the Contact component?
    `Ideal answer`: The EmailJS service ID, template ID, and public key are hardcoded in the client source.
    `Follow-up`: What is the safer alternative?
    `Spoken answer`: EmailJS configuration is hardcoded, which is not ideal for production.

44. `Q`: How would you improve that EmailJS setup?
    `Ideal answer`: I would move configuration into Vite environment variables and reference them with `import.meta.env`.
    `Follow-up`: Would that fully hide the values?
    `Spoken answer`: I would move the IDs into environment variables.

45. `Q`: How is responsiveness handled in this project?
    `Ideal answer`: Responsiveness is handled with Tailwind breakpoint utilities like `sm:`, `md:`, and `lg:`.
    `Follow-up`: Give one example from the code.
    `Spoken answer`: Responsive behavior comes from Tailwind breakpoint classes.

46. `Q`: What does `backdrop-blur-md` do in the navbar?
    `Ideal answer`: It blurs the content behind a semi-transparent element to create a frosted glass effect.
    `Follow-up`: Why does this effect work best with transparency?
    `Spoken answer`: It creates a blurred glass-like background.

47. `Q`: Why use `rel="noopener noreferrer"` with `target="_blank"`?
    `Ideal answer`: It improves security by preventing the new tab from accessing the original window object.
    `Follow-up`: Which ESLint rule is disabled related to this?
    `Spoken answer`: It makes external links safer when opening a new tab.

48. `Q`: Why export an empty `experiences` array instead of removing it completely?
    `Ideal answer`: It prevents breakage if other parts of the project still import or expect that export.
    `Follow-up`: What would be a cleaner long-term solution?
    `Spoken answer`: It keeps old references from breaking.

49. `Q`: What is one UX benefit of the project modal?
    `Ideal answer`: It lets users inspect project details without leaving the page context.
    `Follow-up`: What is one missing UX improvement?
    `Spoken answer`: It shows more details without navigating away.

50. `Q`: What is one weakness in the current modal implementation?
    `Ideal answer`: It lacks accessibility features like Escape-to-close and focus management.
    `Follow-up`: How would you fix that?
    `Spoken answer`: The modal needs better accessibility support.

## Average / Intermediate 25

51. `Q`: Why is this project a good example of component-based design?
    `Ideal answer`: Each section has a focused component, and repeated data is rendered from shared arrays rather than repeated markup.
    `Follow-up`: Which components are purely presentational?
    `Spoken answer`: The app is split into focused React components for each section.

52. `Q`: What scaling issue could appear with a large `constants.js` file?
    `Ideal answer`: As content grows, a single data file becomes harder to manage, review, and reuse.
    `Follow-up`: What would you do instead?
    `Spoken answer`: One large constants file can become difficult to maintain.

53. `Q`: What accessibility issue exists in the Work modal?
    `Ideal answer`: The modal does not trap focus and is missing dialog semantics like `role="dialog"` and `aria-modal`.
    `Follow-up`: Why does focus trapping matter?
    `Spoken answer`: The modal needs proper accessibility and keyboard support.

54. `Q`: What accessibility issue exists in navigation highlighting?
    `Ideal answer`: The active section is only represented visually and is not communicated semantically to assistive technologies.
    `Follow-up`: How could you improve that?
    `Spoken answer`: Active navigation is visual only and could be improved semantically.

55. `Q`: What limitation exists in the current `activeSection` logic?
    `Ideal answer`: It only updates when the user clicks a nav item, not when the user scrolls manually through sections.
    `Follow-up`: Which browser API would solve this better?
    `Spoken answer`: It does not stay accurate if the user scrolls manually.

56. `Q`: How would you improve active section tracking?
    `Ideal answer`: I would use `IntersectionObserver` to detect which section is currently visible and update the nav state accordingly.
    `Follow-up`: Why is that better than scroll polling?
    `Spoken answer`: I would use `IntersectionObserver`.

57. `Q`: Why is hardcoded content across components risky?
    `Ideal answer`: It increases duplication and makes updates more error-prone and inconsistent.
    `Follow-up`: Where do you see this in the project?
    `Spoken answer`: Hardcoded content creates duplication and inconsistency risk.

58. `Q`: What real inconsistency exists in this codebase?
    `Ideal answer`: Some strings have encoding artifacts, some names are misspelled, and some IDs do not match the rendered sections.
    `Follow-up`: Give one concrete example.
    `Spoken answer`: There are a few text and ID inconsistencies that should be cleaned.

59. `Q`: What bug exists in the Footer links?
    `Ideal answer`: The footer uses `id: "projects"` for the Projects link, but the actual section ID is `work`.
    `Follow-up`: What is the effect of this bug?
    `Spoken answer`: The footer Projects link points to the wrong section ID.

60. `Q`: Why is that Footer bug important?
    `Ideal answer`: It breaks expected navigation and makes the UI feel unreliable.
    `Follow-up`: How would you prevent such mismatches?
    `Spoken answer`: Clicking Projects in the footer may fail to scroll correctly.

61. `Q`: What content issue appears in the About paragraph?
    `Ideal answer`: The sentence “with a in building scalable web applications” is grammatically incomplete and should be corrected.
    `Follow-up`: Why does content quality matter in a portfolio?
    `Spoken answer`: There is a grammar issue in the About text.

62. `Q`: What issue exists in the profile image alt text?
    `Ideal answer`: The image alt says “Tarun Kaushik,” which does not match the person presented in the portfolio.
    `Follow-up`: Why is alt text important?
    `Spoken answer`: The profile alt text is mismatched and should be corrected.

63. `Q`: Why is mismatched alt text a serious detail?
    `Ideal answer`: It affects accessibility, professionalism, and trust in the attention to detail of the project.
    `Follow-up`: How would you audit alt text across the project?
    `Spoken answer`: It hurts accessibility and looks careless.

64. `Q`: What code smell exists around `isSent` in Contact?
    `Ideal answer`: `isSent` is updated but not used in rendering or logic, so it appears to be unused state.
    `Follow-up`: What would you do with it?
    `Spoken answer`: `isSent` is currently unused state.

65. `Q`: Why is unused state undesirable?
    `Ideal answer`: It adds mental overhead and suggests incomplete or abandoned logic.
    `Follow-up`: Could linting help catch this?
    `Spoken answer`: Unused state makes the code noisier and less clear.

66. `Q`: What maintainability problem exists in imported assets?
    `Ideal answer`: `constants.js` imports multiple logos and assets that are commented out or unused, which adds clutter.
    `Follow-up`: What cleanup would you suggest?
    `Spoken answer`: Some asset imports are no longer needed and should be cleaned up.

67. `Q`: What design pattern is visible in Skills and Education?
    `Ideal answer`: Both components use data-driven rendering, where structured arrays control the displayed UI.
    `Follow-up`: Why is that better than repeated markup?
    `Spoken answer`: They use data-driven rendering from arrays.

68. `Q`: Why might React Router be installed but unused?
    `Ideal answer`: The developer may have considered multi-page navigation earlier, or it may be planned for future expansion.
    `Follow-up`: When would you actually use it?
    `Spoken answer`: It may have been added for future expansion or an earlier version.

69. `Q`: How would you improve the Contact form UX?
    `Ideal answer`: I would add loading state, disable the submit button during sending, and show inline validation feedback.
    `Follow-up`: Would you also add server-side validation?
    `Spoken answer`: I would add loading, button disabling, and better validation feedback.

70. `Q`: Why is line clamping used in project cards?
    `Ideal answer`: It keeps the cards visually balanced even when project descriptions have different lengths.
    `Follow-up`: What happens if line clamp support is missing?
    `Spoken answer`: It keeps the project grid neat and consistent.

71. `Q`: What performance issue could large static assets create?
    `Ideal answer`: Large images can slow page load time and hurt performance metrics like LCP.
    `Follow-up`: How would you improve image delivery?
    `Spoken answer`: Large images can slow the initial page load.

72. `Q`: How could image performance be improved?
    `Ideal answer`: I would compress images, use modern formats, lazy-load offscreen media, and ensure reasonable dimensions.
    `Follow-up`: Would Vite alone solve image optimization?
    `Spoken answer`: I would optimize, compress, and lazy-load images.

73. `Q`: What does `scroll-behavior: smooth` add to the app?
    `Ideal answer`: It ensures smooth browser-native scrolling transitions when navigating to anchors.
    `Follow-up`: Is it redundant with `scrollIntoView({ behavior: "smooth" })`?
    `Spoken answer`: It gives smooth page scrolling globally.

74. `Q`: What does this project show about your frontend ability?
    `Ideal answer`: It demonstrates component composition, responsive layout, local state management, third-party integrations, and UI polish.
    `Follow-up`: What backend integration exists?
    `Spoken answer`: It shows React component structure, styling, responsiveness, and integration skills.

75. `Q`: Why is this project suitable for interview discussion?
    `Ideal answer`: It is small enough to explain clearly but still includes real concepts like state, rendering, UX, API integration, and maintainability tradeoffs.
    `Follow-up`: Which tradeoff would you discuss first?
    `Spoken answer`: It is a compact project that still covers important frontend concepts.

## Hard 25

76. `Q`: If this project had to scale, what would you refactor first?
    `Ideal answer`: I would separate data, reusable UI primitives, and integration logic more clearly, starting with shared config and reusable section header components.
    `Follow-up`: Why start there?
    `Spoken answer`: I would first improve structure by separating data, shared UI, and integrations.

77. `Q`: How would you redesign `constants.js` for better scalability?
    `Ideal answer`: I would split it into multiple modules such as `skills.js`, `projects.js`, and `education.js`, or move content to JSON or a CMS.
    `Follow-up`: When would a CMS become useful?
    `Spoken answer`: I would split the large constants file into smaller data modules.

78. `Q`: How would you improve active navigation in a robust way?
    `Ideal answer`: I would observe section visibility using `IntersectionObserver` and sync the active nav item based on what is in view.
    `Follow-up`: What threshold would you use?
    `Spoken answer`: I would track active sections with `IntersectionObserver`.

79. `Q`: How would you make the modal accessible?
    `Ideal answer`: I would add `role="dialog"`, `aria-modal="true"`, focus trapping, Escape key support, close-on-overlay-click handling, and focus restoration.
    `Follow-up`: Why restore focus on close?
    `Spoken answer`: I would add dialog semantics, keyboard support, and focus management.

80. `Q`: How would you make the Contact form production-ready?
    `Ideal answer`: I would move config to environment variables, add validation, loading state, submission throttling, better error handling, and possibly route submissions through a backend.
    `Follow-up`: Why might a backend be better than direct EmailJS from the client?
    `Spoken answer`: I would improve security, validation, loading UX, and error handling.

81. `Q`: What is the tradeoff of using EmailJS directly from the client?
    `Ideal answer`: It is quick and simple but gives less control and exposes integration details on the client side.
    `Follow-up`: Is a public key acceptable there?
    `Spoken answer`: It is easy to set up, but it is less controlled than a backend solution.

82. `Q`: What architecture would you use for stronger submission control?
    `Ideal answer`: I would send the form to a backend API route, validate input on the server, and then send email server-side.
    `Follow-up`: What extra benefits would that provide?
    `Spoken answer`: I would route submissions through a backend API.

83. `Q`: Why is React Router unnecessary in the current version?
    `Ideal answer`: Because the app is a single-page scroll-based portfolio, so introducing route complexity is not currently necessary.
    `Follow-up`: At what point would you add routing?
    `Spoken answer`: It is not needed because the app works as a single scrolling page.

84. `Q`: When would React Router become justified?
    `Ideal answer`: If I add dedicated pages such as project details, blogs, case studies, or admin features, routing would make sense.
    `Follow-up`: How would SEO change then?
    `Spoken answer`: I would add routing if the app grows into multiple real pages.

85. `Q`: What UI refactor would reduce duplication across sections?
    `Ideal answer`: I would create a reusable `SectionHeader` component for title, underline, and subtitle text.
    `Follow-up`: Which sections would benefit immediately?
    `Spoken answer`: I would create a reusable section header component.

86. `Q`: What shared config would you centralize next?
    `Ideal answer`: I would centralize social links, nav items, resume URL, and personal profile text into a dedicated config module.
    `Follow-up`: Why is that better than inline values?
    `Spoken answer`: I would centralize links and personal config into one place.

87. `Q`: How would you test the Navbar?
    `Ideal answer`: I would test mobile menu toggling, click behavior, and section activation logic using React Testing Library.
    `Follow-up`: How would you mock scrolling?
    `Spoken answer`: I would test menu toggling and click-based navigation behavior.

88. `Q`: How would you test the Work section?
    `Ideal answer`: I would test that clicking a card opens the correct modal and that the close action resets modal state.
    `Follow-up`: Would you also test link targets?
    `Spoken answer`: I would test modal open and close behavior.

89. `Q`: How would you test the Contact form?
    `Ideal answer`: I would mock EmailJS, submit the form, and verify both success and failure toast flows.
    `Follow-up`: What additional validation would you test?
    `Spoken answer`: I would mock EmailJS and test both success and failure cases.

90. `Q`: What SEO limitation exists in this project?
    `Ideal answer`: The app has limited metadata strategy and is mostly focused on client-rendered UI without content-level SEO optimization.
    `Follow-up`: What metadata would you add first?
    `Spoken answer`: SEO is limited because metadata and structured optimization are minimal.

91. `Q`: How would you improve SEO for this portfolio?
    `Ideal answer`: I would improve page metadata, semantic headings, image alt text, social preview tags, and possibly add pre-rendering or SSR depending on deployment needs.
    `Follow-up`: Would SSR be required for a portfolio?
    `Spoken answer`: I would add better metadata, semantic structure, and social preview tags.

92. `Q`: What risk comes with strong blur and animation effects?
    `Ideal answer`: Heavy visual effects can increase paint cost and reduce performance on low-end devices.
    `Follow-up`: How would you measure that?
    `Spoken answer`: Too much blur and animation can hurt performance.

93. `Q`: How would you support users who prefer reduced motion?
    `Ideal answer`: I would detect `prefers-reduced-motion` and reduce or disable non-essential animations.
    `Follow-up`: Which animations would you target first?
    `Spoken answer`: I would respect `prefers-reduced-motion` and reduce animations.

94. `Q`: What do encoding artifacts in strings suggest?
    `Ideal answer`: They suggest text encoding or copy-paste issues that should be cleaned for professionalism and readability.
    `Follow-up`: Where do you see that in this project?
    `Spoken answer`: They show content cleanup is needed.

95. `Q`: Why should hardcoded external links be centralized?
    `Ideal answer`: Centralization reduces duplication, makes updates safer, and avoids inconsistencies between components.
    `Follow-up`: Which links are duplicated right now?
    `Spoken answer`: Shared links should be stored in one config source.

96. `Q`: If you migrated this project to TypeScript, what would you type first?
    `Ideal answer`: I would start by typing the data models for skills, projects, and education because they drive multiple components.
    `Follow-up`: Which component would benefit most first?
    `Spoken answer`: I would first type the portfolio data structures.

97. `Q`: What is the biggest TypeScript benefit for this codebase?
    `Ideal answer`: It would catch data-shape mismatches early and improve confidence when refactoring shared content structures.
    `Follow-up`: Would you still keep PropTypes?
    `Spoken answer`: TypeScript would help catch data and prop shape issues earlier.

98. `Q`: How would you make this project reusable as a portfolio template?
    `Ideal answer`: I would move all personal content into config files, document setup clearly, and standardize assets and links so anyone could swap in their own data.
    `Follow-up`: What files would a new user edit first?
    `Spoken answer`: I would convert personal data into clean config-driven template fields.

99. `Q`: What are the most important production improvements needed?
    `Ideal answer`: Accessibility, configuration safety, content cleanup, testing, and small navigation bugs should be addressed first.
    `Follow-up`: Which one would you fix before launch?
    `Spoken answer`: I would prioritize accessibility, config cleanup, testing, and bug fixes.

100. `Q`: If asked to summarize the project’s strongest technical value, what would you say?
     `Ideal answer`: It shows practical frontend engineering skills through data-driven React components, responsive Tailwind UI, basic third-party integration, and a clean single-page architecture.
     `Follow-up`: What would be your next improvement if you had one more day?
     `Spoken answer`: It demonstrates solid frontend fundamentals with React, Tailwind, and component-driven design.

## Quick Viva Closing Lines

- This project is a React portfolio built as a single-page application with section-based navigation.
- I used Vite for fast development and Tailwind CSS for responsive styling.
- Most content is centralized in `constants.js`, which makes the UI data-driven.
- I used local React state for the navbar and project modal.
- EmailJS handles contact form submission, and Toastify provides user feedback.
- If I improved it further, I would focus on accessibility, environment-based configuration, and better active-section tracking.
