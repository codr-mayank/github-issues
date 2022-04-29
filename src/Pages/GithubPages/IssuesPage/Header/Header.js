import React from 'react';
import { Icon } from '@iconify/react';
import Chip from '../../../../Components/common/Chip/Chip';
import './Header.scss'

const Header = () => {
  const handleFacebookClick = () => {
    window.open(`https://github.com/facebook`);
  }

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
          <div className='tab'>
            <Icon icon="bi:code" className='icon' />
            Code
          </div>
          <div className='tab selectedTab'>
            <Icon icon="la:dot-circle" className='icon' />
            Issues
          </div>
          <div className='tab extraTabs'>
            <Icon icon="ion:git-pull-request-outline" className='icon' />
            Pull requests
          </div>
          <div className='tab extraTabs'>
            <Icon icon="fluent:play-circle-20-regular" className='icon' />
            Actions
          </div>
          <div className='tab extraTabs'>
            <Icon icon="bi:file-earmark-spreadsheet" className='icon' />
            Projects
          </div>
          <div className='tab extraTabs'>
            <Icon icon="ph:book-open" className='icon' />
            Wiki
          </div>
          <div className='tab extraTabs'>
            <Icon icon="bi:shield-exclamation" className='icon' />
            Security
          </div>
          <div className='tab extraTabs'>
            <Icon icon="bi:graph-up" className='icon' />
            Insights
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
