import React from "react";


class App extends React.Component {
    constructor () {
        this.state = {
            grocery_list: []
        }
    }

    render() {
        if (this.state.grocery_list.length < 1) {
            return (
                <div>
                    Hello World!
                </div>
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}

export default App;