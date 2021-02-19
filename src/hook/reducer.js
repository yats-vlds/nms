export const initialState = {ellipse: false}

export function reducer(state, action) {
    switch (action.type) {
        case 'setEllipse':
            return {ellipse: action.payload}
        default:
            throw new Error();
    }
}