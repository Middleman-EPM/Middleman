import React from 'react';
import PropTypes from 'prop-types';
import { withFauxDOM } from 'react-faux-dom';
import styled from 'styled-components';
import _ from 'lodash';
import ToolTip from './components/ToolTip';
import withD3Renderer from '../hocs/withD3Renderer';

const d3 = {
  ...require('d3-scale'),
  ...require('d3-interpolate'),
  ...require('d3-shape'),
  ...require('d3-selection'),
  ...require('d3-transition')
};

const { arrayof, string, number, shape } = PropTypes;
const LOADING = 'loading...';

// styling for components

const Title = styled.div`
  position: relative;
  display: inline-block;
  .tooltip {
    width: ${({width}) => width / 5}px;
    left: ${({width}) => width * 2 / 5}px;
    top: ${({height}) => height * 3 / 5}px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  .tooltip {
    width: ${({width}) => width / 5}px;
    left: ${({width}) => width * 2 / 5}px;
    top: ${({height}) => height * 3 / 5}px;
  }
`;

