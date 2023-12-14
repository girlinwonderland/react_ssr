import React from 'react';

const HomePage = React.memo(() => (
    <div>
        <h1>Hello, Elizabeth! I'm home</h1>
        <button onClick={() => console.log('press me')}>press me</button>
    </div>

))

export default { element: <HomePage /> };
