import React, { PureComponent, PropTypes } from 'react';

export default class Fill extends PureComponent {
  // static propTypes = {
  //   overflow: PropTypes.oneOf([ 'auto', 'scroll', 'hidden', 'inherit' ]),
  // };
  //
  // static defaultProps = {
  //   overflow: 'auto',
  // };

  render() {
    const { children, className, style } = this.props;

    return (
      <div style={{ ...style, position: 'relative' }} className={className}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
          {children}
        </div>
      </div>
    )
  }
}