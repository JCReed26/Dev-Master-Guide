import React from 'react';

const Chatpage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Chat Page</h1>
      <p>NotebookLM like chatpage - perplexity spaces with chosen context</p>
      <p>Selects stack from pinned references at top of refpage</p>
      <p>Takes in urls for docs and a scraper to find the other relevant docs sections</p>
      <br/>
      <p>GOD PLAN - google adk agents for each reference with chatability on ref page</p>
      <p>Main chat agent can a2a those agents for language specific issues</p>
      <p>Main chat agent will also have research team for documentation it doesnt have access to and deep research related to language and framework usage by ref agents to give starter report to the main orchesetrator agent at chat space initalization</p>
    </div>
  );
};

export default Chatpage;
