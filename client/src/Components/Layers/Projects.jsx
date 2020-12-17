import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projectRepos, setProjectRepos] = useState(null);
  useEffect(() => {
    axios
      .get(
        'https://api.github.com/users/iamsam14/repos?q=oauth&sort=created&order=desc'
      )
      .then((data) => setProjectRepos(data.data));
  }, []);

  const formatDate = (unformattedDate) => {
    const date = new Date(unformattedDate);
    const format = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleString('en-US', format);
  };

  return (
    <>
      <div className="projects">
        <div>
          <h2>Github Projects</h2>
        </div>
        <div className={!projectRepos ? 'centerloading' : 'cards'}>
          {!projectRepos ? (
            <div>Loading...</div>
          ) : (
            projectRepos.map((data) => {
              return (
                <div className="card-color" key={data.id}>
                  <div className="repo-card" key={data.full_name}>
                    <a href={data.html_url} key={data.html_url}>
                      <div>
                        <h4 key={data.name}>{data.name}</h4>
                        <br />
                        <h5 key={data.node_id}>{data.language}</h5>
                        <h6 key={data.id + 1}>
                          Created at: {formatDate(data.created_at)}
                        </h6>
                        <h6 key={data.id + 1}>
                          Last updated at: {formatDate(data.updated_at)}
                        </h6>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
