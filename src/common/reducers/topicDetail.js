import {
    TOPICDETAIL,
    TOPICDETAIL_REQUEST,
    TOPICDETAIL_SUCCESS,
    TOPICDETAIL_FAILURE,
    ADDANSWER ,
    ADDANSWER_REQUEST ,
    ADDANSWER_SUCCESS ,
    ADDANSWER_FAILURE
} from '../actions/topicDetail';

const initialState = {

    error: false,
    isFetching:false,
    data:null

}

export default function topicDetail(state = initialState , action) {

    switch (action.type) {
        //发表之前
        case ADDANSWER_REQUEST:
            return Object.assign({}, state,{
                newAnswer:null
            });
        //发表答案成功
        case ADDANSWER_SUCCESS:
            const { data:answerData } = action.req.data;
            const { data:stateData } = state;
            stateData.answers.push(answerData);

            return Object.assign({}, state,{
                data:stateData,
                newAnswer:answerData,

            });


        case TOPICDETAIL_REQUEST:

            return Object.assign({}, state, {
                isFetching: true,
                data:null
            });
        case TOPICDETAIL_SUCCESS:
         debugger;
            const { data ,user} = action.req.data;
            return Object.assign({}, state, {
                isFetching: false,
                data,
                user
            });
        case TOPICDETAIL_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}
