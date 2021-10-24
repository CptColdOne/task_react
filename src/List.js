import React, {Component} from "react";

export default class List extends Component{
    constructor(){
        super();
        this.setState({list: [{title: "First"}, {title: "Second"}]})
        
    }
    state = {
        list: [],
        addCount: 0,
        removeCount: 0
    };


    renderListItem({item, index}){
        return <div key={item.title}>{item.title}</div>;
    }

    renderList(){
        return this.state.list.map((item,index)=>{
            return this.renderListItem({item, index});
        });
    }

    renderButtonAdd(){
        return <input type="button" value="Добавить элемент" onClick={this.addElem}></input>;
    }

    addElem= () =>{

        this.setState({addCount: ++this.state.addCount});
    }

    renderButtonRemove(){
        return <input type="button" value="Удалить элемент" onClick={this.removeElem}></input>;
    }

    removeElem(){
        
    }

    render(){
        return(
            <div>
                {this.renderList()}
                {this.renderButtonAdd()}
                {this.renderButtonRemove()}
            </div>
        );
    }
}