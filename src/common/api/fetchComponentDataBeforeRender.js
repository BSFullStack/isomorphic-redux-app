export function fetchComponentDataBeforeRender(dispatch, components, params) {
    const needs = components.reduce( (prev, current) => {
        return current ? (current.need || []).concat(prev) : prev;
    }, []);
    const promises = needs.map(need => dispatch(need()));
    return Promise.all(promises);
}
