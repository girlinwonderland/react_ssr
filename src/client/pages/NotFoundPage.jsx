import { useStaticContext } from '../context';
export const NotFoundPage = () => {
    const context = useStaticContext();
    context.notFound = true;
    return <div>Ooooops, page not found:(</div>
}
export default { element: <NotFoundPage /> }
