
const initialState = {
    expression: '',
    amount: false
};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_VALUE') {
        if(state.amount) {
            return {
                ...state,
                expression: action.value
            }
        } else {
            return {
                ...state,
                expression: state.expression + action.value
            }
        }
    }
    if(action.type === 'ADD_OPERATOR') {
        const operator = state.expression[state.expression.length-1];
        if(operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/' && state.expression.length !== 0) {
            return {
                ...state,
                expression: state.expression + action.value,
                amount: false
            }
        }
    }
    if(action.type === 'DELETE' && state.expression.length > 0) {
        return {
            ...state,
            expression: state.expression.slice(0, -1),
            amount: false
        }
    }
    if(action.type === 'DELETE_ALL' && state.expression.length > 0) {
        return {
            ...state,
            expression: '',
            amount: false
        }
    }
    if(action.type === 'GET_AMOUNT') {
        const operator = state.expression[state.expression.length-1];
        if(operator === '+' || operator === '-' || operator === '*' || operator === '/') {
            return {
                ...state,
                expression: ''
            }
        } else if (state.expression.length === 1) {
            return state;
        } else {
            return {
                ...state,
                expression: ''+eval(state.expression),
                amount: true
            }
        }
    }
    return state;
};

export default reducer;
