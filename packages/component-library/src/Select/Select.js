/** @jsx jsx */
// eslint-disable-next-line import/no-extraneous-dependencies
import { jsx } from "@emotion/core";
import { has } from "lodash";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import MaterialSelect from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import { FormLabel } from "@material-ui/core";

const Select = ({
  autoWidth,
  fullWidth,
  displayEmpty,
  onChange,
  value,
  variant,
  formLabel,
  disabled,
  options
}) => {
  const valueLabels = options.map(item =>
    has(item, "value") && has(item, "label")
      ? item
      : { value: item, label: item }
  );

  return (
    <FormControl
      autoWidth={autoWidth}
      fullWidth={fullWidth}
      displayEmpty={displayEmpty}
      variant={variant}
      disabled={disabled}
    >
      <FormLabel style={{ marginBottom: 8 }}>{formLabel}</FormLabel>
      <MaterialSelect
        value={value}
        onChange={onChange}
        input={<OutlinedInput />}
      >
        {valueLabels.map(item => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

Select.displayName = "Select";

Select.propTypes = {
  autoWidth: PropTypes.bool,
  fullWidth: PropTypes.bool,
  displayEmpty: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  variant: PropTypes.string,
  formLabel: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.oneOf(
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.any, label: PropTypes.string })
    )
  ).isRequired
};

Select.defaultProps = {
  autoWidth: true,
  fullWidth: false,
  displayEmpty: true,
  value: "List item",
  variant: "outlined",
  formLabel: "Label",
  disabled: false
};

export default Select;
