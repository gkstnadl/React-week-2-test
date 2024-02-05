const SET_MEMBER = 'SET_MEMBER';

export const setMember = (payload) => {
    return { type: SET_MEMBER, payload };
}

const initialState = "정국";

const member = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEMBER:
            const activeMember = action.payload;
            return activeMember;
        default:
            return state;
    }
};

export default member;