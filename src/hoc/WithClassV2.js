import React from 'react';

const WithClassV2 = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
}
export default WithClassV2;