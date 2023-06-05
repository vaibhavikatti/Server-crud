import React from 'react'
import Categories from './screens/Categories'


function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">
                        Home
                        <Categories/>
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default Home