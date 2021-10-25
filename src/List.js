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
        return <div style={{padding: '10px'}}><input type="button" value="Добавить элемент" onClick={this.addElem}></input></div>;
    }

    addElem= () =>{

        this.setState({addCount: ++this.state.addCount});
    }

    renderButtonRemove(){
        return <div style={{padding: '10px'}}><input type="button" value="Удалить элемент" onClick={this.removeElem}></input></div>;
    }

    removeElem= () =>{

        this.setState({removeCount: ++this.state.removeCount});
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