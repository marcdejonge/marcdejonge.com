export function decr() {
    return {type: "DECR"};
}

export function incr() {
    return {type: "INCR"};
}

export default function counter(state = {counter:0}, action) {
    switch(action.type) {
        case 'INCR':
            return {...state, counter: state.counter + 1};
        case 'DECR':
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
}
