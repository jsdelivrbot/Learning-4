import tv4 from 'tv4';
import statesSchema from 'middlewares/statesSchema';

export default ({dispatch, getState}) => next => action => {
    next(action);

    if(!tv4.validate(getState(), statesSchema)) {
        console.warn('Invalid state schema detected');
    };
};