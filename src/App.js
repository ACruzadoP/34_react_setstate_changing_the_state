import React from "react"

function aumentar() {
    console.log("It's working!")
}
function aumentar2() {
    this.setState(
        {count: 1}
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        aumentar2 = aumentar2.bind(this)
        this.aumentar4 = this.aumentar4.bind(this)
    }
    
    aumentar3() {
        console.log("It's working!")
    }

    aumentar4() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={aumentar}>Console log</button>
                <button onClick={aumentar2}>Change! For real</button>
                <button onClick={this.aumentar3}>Console log</button>
                <button onClick={this.aumentar4}>Change! For real</button>
            </div>
        )
    }
}

export default App
