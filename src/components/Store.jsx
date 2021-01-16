import React from 'react'
import Item from './Item'

export default class Store extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }


    render(){
        return(
            <div>
                <div style={{borderColor:'blanchedalmond',borderWidth:'2px',borderStyle:'solid',flex:1,flexDirection:'row',display:'flex'}}>
                    {this.props.items.map((i,index)=>
                    <Item key={index} index={index} item={i} func={this.props.sellFunc}/>)}                    
                </div>
            </div>
        )
    }
}