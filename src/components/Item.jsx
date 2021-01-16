import React from 'react'


export default function Item(props){

    return(
        <div style={{borderColor:'firebrick',borderWidth:'1px',borderStyle:'solid',maxHeight:'800px',maxWidth:'250px',margin:'2px',padding:'5px'}}>
            <h2>{props.item.name}</h2>
            <h4>{props.item.price}$</h4>
            <img alt="no img" src={props.item.image} style={{maxWidth:'180px',maxHeight:'180px',padding:'2px'}} /><br/>
            <input type='button' value='Buy' onClick={()=>props.func(props.index)} />
        </div>
    )
}