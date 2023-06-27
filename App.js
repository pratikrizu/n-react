const heading = React.createElement(
    'h1',
    { id: 'heading', className: 'red-text' },
    'This Heading coming from React'
);

const page = React.createElement('div', { className: 'container' }, [
    React.createElement(
        'div',
        {
            className: 'container-wrapper1',
        },
        React.createElement('div', { className: 'hero-section' }, [
            React.createElement(
                'h1',
                { className: 'red-text' },
                'Hero Section'
            ),
            React.createElement('p', {}, 'This is secondary text'),
        ])
    ),
    React.createElement(
        'div',
        {
            className: 'container-wrapper1',
        },
        React.createElement('div', { className: 'hero-section' }, [
            React.createElement('h1', {}, 'Hero Section'),
            React.createElement('p', {}, 'This is secondary text'),
        ])
    ),
]);

// console.log(heading);
console.log(page);

const createRoot = ReactDOM.createRoot(document.getElementById('root'));

// createRoot.render(heading);
createRoot.render(page);
