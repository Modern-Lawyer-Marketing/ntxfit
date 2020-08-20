/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SectionBox from '../SectionBox';
import '../../styles/events/get-notified.scss';

/**
 * Lists upcoming events for NTXFIT
 */
const GetNotified = () => (
  <div className="get-notified">
    <SectionBox>
      <h2>Get Notified of Upcoming Events</h2>

      <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
      <div id="mc_embed_signup">
        <form action="https://northtexasfit.us3.list-manage.com/subscribe/post?u=e6981a181982f79c076ceb3b3&amp;id=770b503343" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
              </label>
              <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" value="" name="LNAME" className="" id="mce-LNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
            </div>
            <div className="mc-field-group input-group">
              <strong>Professional Affiliation </strong>
              <ul>
                <li><input type="checkbox" value="1" name="group[26597][1]" id="mce-group[26597]-26597-0" /><label htmlFor="mce-group[26597]-26597-0">Attorney</label></li>
                <li><input type="checkbox" value="2" name="group[26597][2]" id="mce-group[26597]-26597-1" /><label htmlFor="mce-group[26597]-26597-1">Mental Health Professional</label></li>
                <li><input type="checkbox" value="4" name="group[26597][4]" id="mce-group[26597]-26597-2" /><label htmlFor="mce-group[26597]-26597-2">Other</label></li>
              </ul>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_e6981a181982f79c076ceb3b3_770b503343" tabIndex="-1" value="" /></div>
            <div className="clear">
              <input type="submit" value="Get Notified" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
      <script type="text/javascript">
        (
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0]='EMAIL';
        ftypes[0]='email';
        fnames[2]='LNAME';
        ftypes[2]='text';
        fnames[1]='FNAME';
        ftypes[1]='text';
        (jQuery)
        );
        var $mcj = jQuery.noConflict(true);
      </script>
    </SectionBox>
  </div>
);

export default GetNotified;
