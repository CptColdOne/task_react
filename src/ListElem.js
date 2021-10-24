import React, {Component} from "react";

export default class ListElem extends Component{
    constructor(s = [{title: "First"}, {title: "Second"}]){
        super();
        this.setState({list: s})
        
    }
    state = {
        list: []
    };

    renderListItem({item, index}){
        return <div key={item.title}>{item.title}</div>;
    }

    renderList(){
        return this.state.list.map((item,index)=>{
            return this.renderListItem({item, index});
        });
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        );
    }
}