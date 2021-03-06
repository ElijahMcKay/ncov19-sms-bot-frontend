import React from 'react';
// burger for menu
import burger from '../../assets/menu.png';

import { Modal } from 'semantic-ui-react';

import '../Styles.scss';

/*
menubar COMPONENT 
Styling is in pages.scss 
	unable href see body content 
	for menubar hover 
		.menubar position and top href get menubar href hover 
		
Needed inline styling for Modal 
*/

const aTags = { color: 'white' };

export default function Header() {
  return (
    <div className='menubar'>
      <div className='tittle'>
        <a href='https://ncov19-vacc-dash-front-end.now.sh/'>
          <h1 className='title-name'>COVID-19 Tracker</h1>
        </a>
      </div>

      <div className='mobile'>
        <Modal trigger={<img src={burger} alt='menu-trigger' />} basic>
          <Modal.Content>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              <a
                href='https://ncov19-vacc-dash-front-end.now.sh/'
                alt='mobile-sms'
                style={aTags}
              >
                Get Mobile Updates
              </a>
              <a
                href='https://ncov19-vacc-dash-front-end.now.sh/'
                style={aTags}
                className='menubar-right'
              >
                Vaccine Tracker
              </a>
              <a
                href='https://ncov19-vacc-dash-front-end.now.sh/'
                style={aTags}
                className='menubar-right'
              >
                About
              </a>
            </div>
          </Modal.Content>
        </Modal>
      </div>
      <div className='menubar-links'>
        <a
          href='https://ncov19-vacc-dash-front-end.now.sh/'
          alt='mobile-sms'
          id='sms'
        >
          Get Mobile Updates
        </a>
        <a href='https://ncov19-vacc-dash-front-end.now.sh/'>Vaccine Tracker</a>
        <a href='https://ncov19-vacc-dash-front-end.now.sh/'>About</a>
      </div>
    </div>
  );
}
