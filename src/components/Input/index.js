import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.PropTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

export default forwardRef(Input);
