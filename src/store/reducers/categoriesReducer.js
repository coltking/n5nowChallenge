import axios from "axios";
import { SET_CATEGORIES } from "../constants";

const initialState = {
    values: [
        {
            "id": 0,
            "title": "",
            "groupDescription": "0",
            "user": null,
            "categoryId": 0,
            "customerId": "",
            "customerName": "",
            "customerLastName": "",
            "customerTotalCtaCount": 0,
            "comments": null,
            "completed": false,
            "creationDate": "",
            "creationDateEpoch": 0,
            "expirationDate": "",
            "expirationDateEpoch": 0,
            "callToActionDefinitionId": 0,
            "duration": 0,
            "order": 0,
            "answerTree": null,
            "filters": null,
            "customerRank": 0,
            "currentRank": 0
        }
    ]
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                values: action.payload
            }
        default:
            return state;
    }
}