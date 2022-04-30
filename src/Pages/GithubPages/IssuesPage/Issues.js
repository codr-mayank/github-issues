import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import { getIssuesData } from '../../../ApiServices/ApiService';
import Body from './Body/Body';
import Footer from './Footer/Footer';

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
      <Footer />
    </div>
  );
};

export default Issues;
