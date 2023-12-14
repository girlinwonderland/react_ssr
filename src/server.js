import express from 'express';
import path from 'path';
import { matchRoutes } from 'react-router-dom';
import proxy from 'express-http-proxy';
import { RoutersData } from './client/Routes';
import creatStore from './helpers/createStore';
import render from './helpers/render';

// Создаем сервер через express
const app = express();
// если мы получим запрос с '/api' то будем использовать прокси, т е
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000'
        return opts;
    }
}));
// middleware которая позволяет добраться до клиенской сборки в public
app.use(express.static(path.resolve(__dirname, '..', 'public')));
// на все запросы выполняем функцию:
//      - инициализируем стор
//      - проходимся по массиву рутов и выполняем loadData
//      - проходимся по массиву рутов и выполняем loadData - она вернет промис
//      - дожидаемся выполнения всех промисов, рендерим контент и отдаем браузеру
app.get('*', (req, res) => {
    const store = creatStore(req);
    const promises = matchRoutes(RoutersData, req.path).map(({ route }) => (
        'loadData' in route ? route?.loadData(store) : null)
    );
    Promise.allSettled(promises).then(() => {
        const context = {};
        const content = render(req, store, context);
        if (context.url){
            console.log('redirect')
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

// нзапускаем на 3000 порту наш сервер
app.listen(3000, () => console.log('listening on port 3000'))
