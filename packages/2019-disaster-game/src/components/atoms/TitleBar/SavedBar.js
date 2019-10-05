/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { memo, useState, useEffect, useCallback } from "react";

import { palette } from "../../../constants/style";

const containerStyle = css`
  height: 175px;
  width: 700px;
  background-color: ${palette.lemon};
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding: 0 80px;
  border-radius: 80px;
  align-content: center;
  justify-content: space-between;
  justify-self: end;
  z-index: 10;
`;

const justifyRightStyle = css`
  margin-top: 10px;
  margin-right: 60px;
`;

const headerStyle = css`
  font-family: "Luckiest Guy", sans-serif;
  font-size: 4rem;
  line-height: initial;
  color: ${palette.blue};
  margin: 0;
  padding-top: 15px;
`;

const labelStyle = css`
  font-family: "Boogaloo", sans-serif;
  font-size: 4rem;
  color: ${palette.blue};
  margin: 0;
  line-height: 130px;
  vertical-align: middle;
`;

const savedNumber = css`
  font-family: "Boogaloo", sans-serif;
  font-size: 4.5rem;
  color: ${palette.red};
`;

const SavedBar = ({ justifyRight }) => {
  return (
    <div
      css={css`
        ${containerStyle}
        ${justifyRight && justifyRightStyle}
      `}
    >
      <p css={headerStyle}>
        You
        <br />
        Saved
      </p>
      <p css={labelStyle}>
        People <span css={savedNumber}>234</span>
      </p>
      <p css={labelStyle}>
        Pets <span css={savedNumber}>00</span>
      </p>
    </div>
  );
};

SavedBar.propTypes = {
  justifyRight: PropTypes.bool
};

export default SavedBar;

// const mapStateToProps = state => ({});

// export default connect(mapStateToProps)(memo(SavedBar));