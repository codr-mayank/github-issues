import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import { getIssuesData } from '../../../ApiServices/ApiService';
import Body from './Body/Body';

const Issues = () => {
  const [issues, setIssues] = useState([]);

  const getIssues = async () => {
    let issuesData = await getIssuesData();

    if (issuesData && issuesData.length) {
      setIssues(issuesData);
    }
  }

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      <Header />
      <Body issues={issues} />
    </div>
  );
};

export default Issues;
