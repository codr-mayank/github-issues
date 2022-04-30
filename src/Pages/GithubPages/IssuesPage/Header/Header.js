import React from 'react';
import { Icon } from '@iconify/react';
import Chip from '../../../../Components/common/Chip/Chip';
import './Header.scss'

const Header = () => {
  const tabs = [
    { title: 'Code', icon: 'bi:code' },
    { title: 'Issues', icon: 'la:dot-circle', selected: true },
    { title: 'Pull requests', icon: 'ion:git-pull-request-outline', hide: true },
    { title: 'Actions', icon: 'fluent:play-circle-20-regular' },
    { title: 'Projects', icon: 'bi:file-earmark-spreadsheet', hide: true },
    { title: 'Wiki', icon: 'ph:book-open', hide: true },
    { title: 'Security', icon: 'bi:shield-exclamation', hide: true },
    { title: 'Insights', icon: 'bi:graph-up', hide: true },
  ];

  /**
   * handleFacebookClick: Function to handle 'facebook' text click.
   * It opens Facebook github page, in a separate tab.
   */
  const handleFacebookClick = () => {
    window.open(`https://github.com/facebook`);
  }

  /**
   * handleReactClick: Function to handle 'react' text click.
   * It opens Facebook's React repo github page, in a separate tab.
   */
  const handleReactClick = () => {
    window.open(`https://github.com/facebook/react`);
  }

  return (
    <div className='container'>
      <div className='flex'>
        <div className='leftHeading'>
          <Icon icon="bi:journal-bookmark" className='icon' />
          <div className='fbText' onClick={handleFacebookClick}>facebook</div>
          <div>/</div>
          <div className='reactText' onClick={handleReactClick}>react</div>
          <Chip
            className='chip'
            variant='outline'
            color='#57606a'
            text='Public'
          />
        </div>
        <div className='rightHeading'>
          <div className='rightMenuItem'>
            <Icon icon="bi:bell" className='icon' />
            <span className='menuText'>
              Notifications
            </span>
          </div>
          <div className='rightMenuItem'>
            <Icon icon="bi:star" className='icon' />
            <span className='menuText one'>
              Star
            </span>
            <span className='menuText two'>
              175k
            </span>
          </div>
          <div className='rightMenuItem'>
            <Icon icon="octicon:repo-forked-24" className='icon' />
            <span className='menuText one'>
              Fork
            </span>
            <span className='menuText two'>
              35.3k
            </span>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='tabs'>
          {(tabs || []).map(tab => (
            <div className={`tab ${tab.selected ? 'selectedTab' : ''} ${tab.hide ? 'extraTabs' : ''}`}>
              <Icon icon={tab.icon} className='icon' />
              {tab.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
