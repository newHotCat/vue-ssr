import * as constants from './constants'
const actions = {
    [constants.INCREMENT] ({commit}) {
        commit(constants.INCREMENT)
    }    
}

export default actions