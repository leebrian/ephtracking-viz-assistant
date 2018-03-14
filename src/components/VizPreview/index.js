import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ephtrackingViz from 'ephtracking-viz';
import * as d3 from 'd3';

class VizPreview extends Component {
  componentDidMount() {
    const { measureId,
      geographicItemsFilter,
      stratificationLevelId,
      geographicTypeIdFilter } = this.props;
    const options = {
      type: 'line-chart',
      data: {
        measureId,
        stratificationLevelId,
        geographicTypeIdFilter,
        geographicItemsFilter
      }
    };
    ephtrackingViz.createVisualization(this.svg, options);
  }

  shouldComponentUpdate() {
    // this prevents future re-renders of this component
    return false;
  }

  componentWillReceiveProps(newProps) {
    d3.select(this.svg).selectAll('*').remove();
    const { measureId,
      geographicItemsFilter,
      stratificationLevelId,
      geographicTypeIdFilter } = newProps;
    const options = {
      type: 'line-chart',
      data: {
        measureId,
        stratificationLevelId,
        geographicTypeIdFilter,
        geographicItemsFilter
      }
    };
    ephtrackingViz.createVisualization(this.svg, options);

  }

  render() {
    return (
      <svg width="900" height="400" ref={elem => { this.svg = elem; }} />
    );
  }
};

VizPreview.propTypes = {
  measureId: PropTypes.string.isRequired,
  stratificationLevelId: PropTypes.string.isRequired,
  geographicTypeIdFilter: PropTypes.string.isRequired,
  geographicItemsFilter: PropTypes.array.isRequired
};

export default VizPreview;
