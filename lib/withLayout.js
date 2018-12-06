import React from 'react';
import Header from '../components/Header';

const withLayrout = Component => {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <Header />
                    <Component />
                </div>
            );
        }
    };
};

export default withLayrout;
