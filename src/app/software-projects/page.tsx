import SoftwareProject from "./SoftwareProject";

const page = () => {
  return (
    <>
      <h1>Software Development Projects</h1>
      <div className="software-development-container">
        <SoftwareProject
          img="/pictures/kanri-mono_server.png"
          title="Kanri-Mono Server"
          gitHub="https://github.com/Jrock474/GraphQL-Practice"
          website="https://graph-ql-practice-nine.vercel.app/"
          description="GraphQL server dedicated to querying the database from Kanri-Mono to return user data"
        />
        <SoftwareProject
          img="/pictures/movie_search.png"
          title="Movie Search"
          gitHub="https://github.com/Jrock474/Movie_Search"
          website="https://movie-search-jrock474.vercel.app/"
          description="A mobile responsive React app that searches movies from an IMBD API based off of provided query"
        />
        <SoftwareProject
          img="/pictures/country_search.png"
          title="Country Search"
          gitHub="https://github.com/Jrock474/React_Project"
          website="https://react-project-jrock474.vercel.app/"
          description="My first React Project that searches and displays all Countries from an API while also displaying specific information on the selected country such as it's continent, timezone, ect."
        />
        <SoftwareProject
          img="/pictures/portfoliov1.png"
          title="Portfolio (Version 1)"
          gitHub="https://github.com/Jrock474/Austral.github.io"
          website="https://jrock474.github.io/Austral.github.io/index.html"
          description="This was my initial portfolio that was developed without a framework while I was still learning how to code. Its purpose was to showcase my prevoius creative works"
        />
        <SoftwareProject
          img="/pictures/kanri-mono.png"
          title="Kanri-Mono"
          gitHub="https://github.com/Jrock474/Capstone_Project"
          website="https://capstone-project-psi-bay.vercel.app/"
          description="Collaborative project focused around creating a pet game. I was responsible for the server and backend"
        />
        <SoftwareProject
          img="/pictures/health_fitness.png"
          title="Health & Fitness"
          gitHub="https://github.com/Jrock474/GraphQL-Practice"
          website="https://front-end-project-plum.vercel.app/"
          description="My first collaboration project focused on using HTML CSS and Vanilla JavaScript"
        />
      </div>
    </>
  );
};

export default page;
