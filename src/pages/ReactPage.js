import React from 'react';

const ReactPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">ReactJS Reference</h1>

      <div className="card bg-base-200 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title">What is ReactJS?</h2>
          <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p>
          {/* Add more detailed explanation here */}
        </div>
      </div>

      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Keywords and Components Used</h2>
          <p>This project was built using the following React concepts and libraries:</p>
          <ul className="list-disc list-inside">
            <li><b>Components:</b> Reusable pieces of UI (e.g., `Layout.js`, `HomePage.js`, `ReactPage.js`).</li>
            <li><b>JSX:</b> A syntax extension for JavaScript that looks similar to XML or HTML.</li>
            <li><b>Props:</b> A mechanism for passing data from a parent component to a child component (e.g., the `children` prop in `Layout.js`).</li>
            <li><b>State:</b> (Not used yet, but a core concept) A built-in object to store data that can change over time and re-render the component when it does.</li>
            <li><b>`react-router-dom`:</b> A library for handling routing in React applications. We use `Link` for navigation and will set up `BrowserRouter`, `Routes`, and `Route`.</li>
          </ul>
          {/* Add more keywords, components, and code samples here */}
        </div>
      </div>
    </div>
  );
};

export default ReactPage;
