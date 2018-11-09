import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { css } from 'emotion';
import BaseMap from '../BaseMap/BaseMap';
import CivicSandboxMap from '../CivicSandboxMap/CivicSandboxMap';
import CivicSandboxDashboard from '../CivicSandboxDashboard/CivicSandboxDashboard';
import Button from '../Button/Button';

const dashboardStyle = css`
  top: 40px;
  left: 40px;
  min-height: 540px;
`;

const cardClass = css`
  padding: 0 2em 2em 2em;

  p {
    margin: 40px 0;
    line-height: 1.6;
  }
`;

const titleClass = css`
  margin: 0;
  text-align: left;
  font-size: 2em;
  line-height: 1.2;
  margin-bottom: 1em;
`;

const dashboardContainer = css`
  position: relative;
  z-index: 1;
  @media (max-width: 640px) {
    position: relative;
    left: 0;
    height: 100%;
  }
`;

const descriptionClass = css`
  margin: 0 auto;
  text-align: left;
`;

const fullWidth = css`
  position: absolute;
  width: 100%;
  left: 0;
`;

const spacer = css`
  min-height: 650px;
`;

const buttonContainer = css`
  position: absolute;
  bottom: 80px;
  right: 40px;
`;

const CivicSandboxCardDesktop = ({
  children,
  mapLayers,
  dashboardData,
  title,
  style,
  link,
}) => (
  <div className={style}>
    <div className={fullWidth}>
      <div className={dashboardContainer}>
        <CivicSandboxDashboard data={dashboardData} style={dashboardStyle}>
          <div className={cardClass}>
            {title ? (
              <div className={titleClass}>
                <h2>{title}</h2>
              </div>
            ) : null}
            {children ? (
              <div className={descriptionClass}>{children}</div>
            ) : null}
          </div>
        </CivicSandboxDashboard>
      </div>
      <BaseMap
        initialZoom={10.5}
        initialLatitude={45.5445}
        initialLongitude={-122.725}
        height={650}
        navigationOptions={{ position: 'right' }}
      >
        <CivicSandboxMap mapLayers={mapLayers} />
      </BaseMap>
      <div className={buttonContainer}>
        <Link to={link}>
          <Button>{'More interactive maps >'}</Button>
        </Link>
      </div>
    </div>
    <div className={spacer} aria-hidden />
  </div>
);

CivicSandboxCardDesktop.propTypes = {
  children: PropTypes.node,
  mapLayers: PropTypes.node,
  dashboardData: PropTypes.node,
  title: PropTypes.string,
  style: PropTypes.string,
  link: PropTypes.string,
};

export default CivicSandboxCardDesktop;
