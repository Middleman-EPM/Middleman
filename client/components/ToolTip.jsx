import React from 'react';
import PropTypes from 'prop-types';

const { string, object } = PropTypes; 

const ToolTip = ({ style = {}, content }) => {
  <div className ='tooltip' style={style}>
    {content}
  </div>
};

ToolTip.PropTypes = {
  content: string, 
  style: object,
}

export default ToolTip;
