import { SET_TOP_TEN } from "../constants"

const initialState = {
    values: [
        {
            "id": 0,
            "name": "",
            "color": "",
            "isNotification": false,
            "ctasCount": 0,
            "type": ""
        }
    ]
}

export default function topTenReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOP_TEN:
            return { ...action.payload }
        default:
            return { ...state }
    }
}
