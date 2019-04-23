// TODO



// var App = () => (
//     <div>
//       <h2>My Todo List</h2>
//       <TodoList />
//     </div>
//   );


// var MyGroceries = (props) => {
//     var onListItemClick = (event) => {
//         alert("I got clicked");
//     };
//     return (
//         <ul>
//             <li onClick={onListItemClick}>{props.tobuy[0]}</li>
//             <li onClick={onListItemClick}>{props.tobuy[1]}</li>
//         </ul>
//     );
// };

var GroceryList = () => (
<div>
    <h2> grocery list </h2>
    <MyGroceries tobuy = {['Coffee', 'Tea']}/>
</div>

);


// ReactDOM.render(<GroceryList />, document.getElementById("app"));

class GroceryListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            done: false,
            hover: false
        };
    }
    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }

    onMouseEnter(){
        this.setState({
            hover: true
        })
    }

    onMouseLeave(){
        this.setState({
            hover: false
        })
    }


    render(){
        var style = {
            textDecoration: this.state.done? 'line-through' : 'none',
            fontWeight: this.state.hover? 'bold' : 'normal'
        };
        return(
            // <li onClick={this.props.onClick}>{this.props.item}</li>
            <li style = {style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
        );
    }
}

var MyGroceries = (props) => {
    var onListItemClick = (event) => {
        alert("I got clicked");
    };
    return(
    <ul>
        {props.tobuy.map(item =>
            <GroceryListItem item = {item} onClick={onListItemClick}/>
             )}
    </ul>
    );
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));