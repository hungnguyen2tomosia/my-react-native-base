import React from 'react';
import {TouchableOpacity} from 'react-native';
import debounce from 'lodash.debounce'; // 4.0.8

const withPreventDoubleClick = (WrappedComponent, timeout = 300) => {
  class PreventDoubleClick extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = debounce(this.debouncedOnPress, timeout, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return PreventDoubleClick;
};

export const WithPreventDoubleClickButton =
  withPreventDoubleClick(TouchableOpacity);

export const Button = withPreventDoubleClick(TouchableOpacity, 1000);

export default withPreventDoubleClick;
