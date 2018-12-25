import * as constants from './constants'

const mutations = {
    [constants.INCREMENT] (state) {
        state.count++
    }    
}

export default mutations