import React from 'react';
import Store from './Store';
import Cart from './Cart';


export default class Main extends React.Component{
constructor(props){
    super(props);
    this.state={
        items:[
            {
                name:'white socks',
                category:'socks',
                price:5,
                image:'https://image.shutterstock.com/image-photo/white-sock-isolated-mockup-on-260nw-1743603680.jpg'
            },
            {
                name:'white shoes',
                category:'shoes',
                price:75,
                image:'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B800%2C500%5D&w=1600&h=838&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F06%2Fgreats-sneaker-women.jpg'
            },
            {
                name:'black shirt',
                category:'shirt',
                price:20,
                image:'https://image.freepik.com/free-vector/front-back-black-t-shirt-mockup_6735-270.jpg'
            },
            {
                name:'yellow pants',
                category:'pants',
                price:45,
                image:'https://roneck.com/wp-content/uploads/2020/04/yellow.jpg'
            },
            {
                name:'visor hat',
                category:'hats',
                price:25,
                image:'https://image.shutterstock.com/image-photo/fashion-hat-visor-isolated-on-260nw-1084611491.jpg'
            },
        ],
        cart:[],
        cost:0,
        tof:false,
        search:'',
        category:''
    }
}

changeMode=()=>{
    this.setState((prev)=>({
        tof:!prev.tof
    }))
}

sellFunc=(index,item)=>{
    let arr= this.state.items.filter((it,i)=>it.name!==item.name)
    this.setState((prev)=>({
        items:arr,
        cart:[...prev.cart,item],
        cost:prev.cost+item.price
    }))
}

cartFunc=(index,item)=>{
    let arr= this.state.cart.filter((item,i)=>index!==i)
    this.setState((prev)=>({
        cart:arr,
        items:[...prev.items,item],
        cost:prev.cost-item.price
    }))
}

change=(e)=>{
    this.setState({
        search:e.target.value
    })
}

categoryC=(e)=>{
    this.setState({
        category:e.target.value
    })
}

    render(){
        return(
            <div>
                <div>
                    <h1>Nav bar: <input type='button' value={this.state.tof ? 'To Shop' : 'To Cart'} onClick={this.changeMode} /></h1>
                    {this.state.tof&&<h1>Cart:</h1>}
                    {!this.state.tof&&(<div><h1>Shop:</h1><label>Search: <input value={this.state.search} type='text' onChange={this.change} /></label>
                        <label>Category: </label>
                        <select value={this.state.category}  onChange={this.categoryC}>
                            <option value=''>all</option>
                            <option value='hats'>hats</option>
                            <option value='shoes'>shoes</option>
                            <option value='socks'>socks</option>
                            <option value='pants'>pants</option>
                            <option value='shirt'>shirt</option>
                        </select></div>)}
                </div>
                {this.state.tof&&<div style={{display:'flex',width:'100%',height:'100%',margin:'2px',maxHeight:'600px'}}>
                    
                    <Cart items={this.state.cart} cartFunc={this.cartFunc} cost={this.state.cost} />
                </div>}
                {!this.state.tof&&<div style={{display:'flex',width:'100%',height:'100%',margin:'2px',flexDirection:'column'}}>
                    
                    <Store items={this.state.items} sellFunc={this.sellFunc} search={this.state.search} category={this.state.category} />
                </div>}
            </div>
        )
    }
}