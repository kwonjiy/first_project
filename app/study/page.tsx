import React from 'react';

const StudyList = () => {
  const topics = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Next.js Guide' },
    { id: 3, title: 'TypeScript Tips' },
  ];

  return (
    <div>
      <h1>Study Topics</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudyList;