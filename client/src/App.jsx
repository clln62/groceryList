import React from "react";
import GroceryList from "./components/GroceryList.jsx";


class App extends React.Component {
    constructor (props) {
        super(props);
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
                    <GroceryList />
                </div>
            )
        }
    }
}

export default App;