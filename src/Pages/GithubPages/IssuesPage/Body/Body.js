import React, { useRef } from 'react';
import Chip from '../../../../Components/common/Chip/Chip';
import { Icon } from '@iconify/react';
import './Body.scss';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

const Body = ({ issues }) => {
  const rightMenu = [
    { title: 'Author' },
    { title: 'Label' },
    { title: 'Projects', hide: true },
    { title: 'Milestones', hide: true },
    { title: 'Assignee' },
    { title: 'Sort' }
  ];

  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  /**
   * handleIssueClick: Function to handle issue item click.
   * It opens issue github page, in a separate tab.
   */
  const handleIssueClick = (issue) => {
    if (issue && issue.number) {
      window.open(`https://github.com/facebook/react/issues/${issue.number}`);
    }
  }

  /**
   * handleUsernameClick: Function to handle username click.
   * It opens user's github profile page, in a separate tab.
   */
  const handleUsernameClick = (issue) => {
    if (issue && issue.user && issue.user.login) {
      window.open(`https://github.com/${issue.user.login}`);
    }
  }

  /**
   * getHeight: Function to get height of each item (element) in the issue list.
   * 
   * @param {number} index 
   * @returns 
   */
  const getHeight = index => {
    let height = 90;
    if (document.getElementById(`id${index}`)) {
      height = document.getElementById(`id${index}`).clientHeight;
    }
    return height + 10;
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
        <div style={{ width: "100%", height: "100vh" }}>
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowHeight={({ e, index }) => getHeight(index)}
                deferredMeasurementCache={cache.current}
                rowCount={issues.length}
                className='issuesList'
                rowRenderer={({ key, index, style, parent }) => {
                  const issue = issues[index];

                  return (
                    <CellMeasurer
                      key={key}
                      cache={cache.current}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}
                    >
                      <div style={style} id={`id${index}`}>
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
                      </div>
                    </CellMeasurer>
                  );
                }}
              />
            )}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};

export default Body;
