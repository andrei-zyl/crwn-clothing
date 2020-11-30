import React from 'react';
import './with-spinner.styles.scss';

const WithSpinner = Wrappedcomponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className="spinner-overlay">
                <div className="spinner-container"></div>
            </div>
        ) : (
            <Wrappedcomponent {...otherProps}/>
        )
    }

    return Spinner
} 

export default WithSpinner;