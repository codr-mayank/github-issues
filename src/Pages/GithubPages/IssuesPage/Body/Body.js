import React from 'react';
import Chip from '../../../../Components/common/Chip/Chip';
import { Icon } from '@iconify/react';
import './Body.scss';

const Body = ({ issues }) => {
  const rightMenu = [
    { title: 'Author' },
    { title: 'Label' },
    { title: 'Projects', hide: true },
    { title: 'Milestones', hide: true },
    { title: 'Assignee' },
    { title: 'Sort' }
  ];

  const handleIssueClick = (issue) => {
    if (issue && issue.number) {
      window.open(`https://github.com/facebook/react/issues/${issue.number}`);
    }
  }

  const handleUsernameClick = (issue) => {
    if (issue && issue.user && issue.user.login) {
      window.open(`https://github.com/${issue.user.login}`);
    }
  }

  return (
    <div className='body'>
      <div className='listContainer'>
        <div className='listHeader'>
          <div className='listHeaderLeft'>
            <Icon icon="la:dot-circle" className='icon circle' />
            <span className='openCount'>
              661 Open
            </span>
            <Icon icon="charm:tick" className='icon tick' />
            <span className='closeCount'>
              10,712 Closed
            </span>
          </div>
          <div className='listHeaderRight'>
            {(rightMenu || []).map((item, index) => (
              <div key={index} className={`rightMenuItem ${item.hide ? 'hide' : ''}`}>
                {item.title || '-'}
                <Icon icon='eva:arrow-down-fill' className='icon' />
              </div>
            ))}
          </div>
        </div>
        <div className='issuesList'>
          {(issues || []).map((issue, index) => (
            <div key={index} className='issueItem'>
              <Icon icon="la:dot-circle" className='icon' />
              <div className='issueItemData'>
                <div className='issueDetails'>
                  <div className='issueTitle'>
                    <div className='issueTitleChip' onClick={() => handleIssueClick(issue)}>
                      <span className='issueTitleText'>
                        {issue.title || '-'}
                      </span>
                      {(issue.labels || []).map((label, index) => (
                        <Chip
                          key={index}
                          className='chip'
                          variant='solid'
                          backgroundColor={`#${label.color || '000'}`}
                          text={label.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className='issueUser'>
                  {`#${issue.number || '-'} opened by `}
                  <span className='username' onClick={() => handleUsernameClick(issue)}>
                    {(issue.user || {}).login || '-'}
                  </span>
                </div>
              </div>
              {!!(issue || {}).comments && (
                <div className='comment'>
                  <Icon icon="ion:chatbox-outline" className='icon' />
                  <span className='commentCount'>
                    {issue.comments}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
