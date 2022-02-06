import React,{ Component } from "react";

class Errorboundry extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            hasError: false
        }
    }

    render()
    {
        if(this.state.hasError)
        {
            return <h1>Ooops, This doesn't looks good.</h1>
        }
        return this.props.children;
    }
}

export default Errorboundry;