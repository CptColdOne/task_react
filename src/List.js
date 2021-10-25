import React, {Component} from "react";
import { ListElem } from "./ListElem";

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            list: [{title: "First"}, {title: "Second"}],
            addCount: 0,
            removeCount: 0
        };
        
    }
    
    renderListItem({item, index}){
        return <div key={item.title}><ListElem title={item.title}/></div>;
    }

    renderList(){
        return this.state.list.map((item,index)=>{
            return this.renderListItem({item, index});
        });
    }

    renderButtonAdd(){
        return <div style={{padding: '2px'}}><input style={{cursor: 'pointer'}} type="button" value="Добавить элемент" onClick={this.addElem}></input></div>;
    }

    addElem= () =>{
        this.state.list.push({title: Math.random()});
        this.setState({addCount: this.state.addCount + 1});
    }

    renderButtonRemove(){
        return <div style={{padding: '2px'}}><input style={{cursor: 'pointer'}} type="button" value="Удалить элемент" onClick={this.removeElem}></input></div>;
    }

    removeElem= () =>{
        this.state.list.pop();
        this.setState({removeCount: this.state.removeCount + 1});
    }

    renderListLength(){
        return <div>Длина массива: {this.state.list.length}</div>
    }

    renderAddCounter(){
        return <div>Количество кликов на кнопку добавления: {this.state.addCount}</div>
    }

    renderRemoveCounter(){
        return <div>Количество кликов на кнопку удаления: {this.state.removeCount}</div>
    }

    render(){
        return(
            <div>
                {this.renderListLength()}
                {this.renderAddCounter()}
                {this.renderRemoveCounter()}
                {this.renderList()}
                {this.renderButtonAdd()}
                {this.renderButtonRemove()}
            </div>
        );
    }
}