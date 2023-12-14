import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import { StaticProvider } from '../client/context';
import { Routers } from '../client/Routes';

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <StaticProvider value={context}>
                    <Routers />
                </StaticProvider>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic()
    const html = `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="shortcut icon" href="data:," />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script> window.INITIAL_STATE = ${serialize(store.getState())} </script>
                <script src="bundle.js" ></script>
            </body>
        </html>
    `

    return html;
}
