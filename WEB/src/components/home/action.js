export const GET_LOCATION_USER = 'GET_LOCATION_USER';
// export const GET_HOME_SEARCH_TEXT = 'GET_HOME_SEARCH_TEXT';


export const getUser = () => dispath => {
    dispath({
        type:GET_LOCATION_USER,
        user:localStorage.getItem('user')
    })
}

export const Homepagesearch = (pop,value) => dispath => {
    pop.history.push(`/StockNews?key=${value}`)
    
    // dispath({
    //     type:GET_HOME_SEARCH_TEXT,
    //     value:value
    // })
}