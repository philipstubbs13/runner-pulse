<div align="center">
  <h1>Runner Pulse - Advanced Running Analytics App</h1>

Project Link: [https://runner-pulse.vercel.app/](https://runner-pulse.vercel.app/)

Runner Pulse is a comprehensive web application designed for passionate runners to track, analyze, and improve their performance. Built with modern web technologies, this app offers a sleek, responsive interface and powerful analytics tools.

<h4>
    <a href="https://runner-pulse.vercel.app/">Live</a>
  <span> · </span>
    <a href="https://66e7fab26977c0410ed6ca2b-ymdpnwigph.chromatic.com">Storybook</a>
  <span> · </span>
    <a href="https://github.com/philipstubbs13/runner-pulse/issues">Report Issue</a>
  </h4>
</div>

<br />

# Table of Contents

- [Acknowledgments](#about-the-project)
- [About the Project](#about-the-project)
  - [Built With](#tech-stack)
  - [Features](#features)
  - [Technical Highlights](#highlights)
  - [My Expertise](#expertise)
- [Getting Started](#getting-started)
- [Running Storybook](#running-storybook)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [Issues And Requests](#issues-and-requests)

## <a name="acknowledgments"></a>Acknowledgments

- [Storybook](https://storybook.js.org/) for simplifying UI development, testing, and documentation.
- [Next.js](https://nextjs.org/) for the robust and flexible React framework.

## <a name="about-the-project"></a>About the Project

This project showcases the ability to deliver a feature-rich, user-centric application that caters to the specific needs of the running community while leveraging cutting-edge web development technologies.

### <a name="tech-stack"></a>Built With

  <ul>
      <li><a href="https://runsignup.com/API"">RunSignup API</a></li>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://react.dev/">React.js</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://tailwindcss.com/">Tailwind</a></li>
    <li><a href="hhttps://66e7fab26977c0410ed6ca2b-ymdpnwigph.chromatic.com">Storybook</a></li>
    <li><a href="https://www.chromatic.com/library?appId=66e7fab26977c0410ed6ca2b">Chromatic</a></li>
    <li><a href="https://recharts.org/en-US/">Recharts</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://www.prisma.io/">Prisma</a></li>
    <li><a href="https://cloudinary.com/">Cloudinary</a></li>
    <li><a href="https://ui.shadcn.com/">shadcn/ui</a></li>
    <li><a href="https://next-auth.js.org/">NextAuth</a></li>
  </ul>

### <a name="features"></a>Key Features

- Personal race result tracking and anaylsis
- Interactive performance charts and statistics
- Upcoming race discovery and management
- Photo gallery for capturing running memories
- Customizable user profiles and settings

### <a name="highlights"></a> Technical Highlights

- Developed using React and Next.js for a fast, server-side rendered experience.
- Responsive design implemented with Tailwind CSS for a seamless mobile and desktop experience.
- Interactive charts created using Recharts library for data visualization.
- State management and routing handled efficiently with React hooks and Next.js App Router.
- Accessible UI components built with shadcn/ui library.
- Module architecture for easy maintenance and scalability.

### <a name="expertise"></a> My Expertise

The Runner Pulse app demonstrates expertise in:

- Building complex, data-driven React applications.
- Creating intuitive and responsive user interfaces.
- Implementing advanced data visualization techniques.
- Developing performant and scalable web applications.

## <a name="getting-started"></a>Getting Started

Follow these instructions to set up and run the project on your local machine.

Clone the project from GitHub.

```bash
  git clone https://github.com/philipstubbs13/runner-pulse.git
```

Go to the project directory.

```bash
  cd runner-pulse
```

Install dependencies.

```bash
  npm install
```

Start the Next.js development server.

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## <a name="running-storybook"></a>Running Storybook

This project uses [Storybook](https://storybook.js.org/). Storybook is a frontend development tool for developing, testing, and documenting UI components in complete isolation from the applications in which they are used. In this Storybook, you will find all of the UI components used throughout the app and documentation on how to use/implement these components.

To run Storybook for this project, run the following command in the root directory of this project.

```bash
  npm run storybook
```

The Storybook for this project is deployed to the following URL: <https://66e7fab26977c0410ed6ca2b-ymdpnwigph.chromatic.com>

## Chromatic

For this project, Storybook is deployed via Chromatic. Chromatic catalogs the component library across commits and branches. If you plan to contribute to this project, it can help with reviewing the UI components, see past versions of the component, and get feedback on any work in progress.

The Chromatic library is available at the following URL (mostly valuale only if you plan to contribute to this project):

<https://www.chromatic.com/library?appId=66e7fab26977c0410ed6ca2b>

Currently, When you push code to the main branch, a GitHub action is set up for this repository to automatically kick off a build in Chromatic. The Chromatic GitHub action is located in the **.github/workflows** directory of the repository. The `CHROMATIC_PROJECT_TOKEN` must be configured as a repository secret in the settings of this repository for this action to work.

When this action is run, a build will be kicked off. After the build is complete, you can review the component changes associated with that build and either accept or deny those changes from the Chromatic library.

### <a name="deployment"></a>Deployment

This app is deployed through the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
Deploys are set up to happen automatically when code is merged into the `main` branch.

## <a name="contributing"></a>Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## <a name="contact"></a>Contact

Phil Stubbs - philipstubbs13@gmail.com

## <a name="issues-and-requests"></a>Issues and Requests

If you find an issue while using the application or have a request, log the issue or request [here](https://github.com/philipstubbs13/runner-pulse/issues). These will be addressed in a future code update.
