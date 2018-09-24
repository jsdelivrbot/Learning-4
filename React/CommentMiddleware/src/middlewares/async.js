export default ({dispatch}) => next => action => {
    //If action has a promise we wait for it to resolve, otherwise give it to next

    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    //If promise, we want to wait for it to resolve and send a new action with dispatch
    action.payload.then(function (response) {
        const newAction = {...action, payload: response};
        dispatch(newAction);
    });
}
