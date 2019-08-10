class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: [ ]
        }
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            };
        });
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This item already exists in list.'
        }
        //equivalent of else

        console.log(option);
        this.setState((prevState)=>{
            return {
                options:prevState.options.concat(option)
            };
        });
        
    }

    handlePick(){
        const options = this.state.options;
        const randomNumber = Math.floor(Math.random()*options.length);
        alert(options[randomNumber]);
    }

    render(){
        const title =  'Indecision';
        const subtitle ="Put your life in the hands of a computer";

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{

    render(){
        return(
            <div>
                <button type='button' 
                    onClick={this.props.handlePick} 
                    disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
  
    render(){
        return(
            <div>
                <button type='button' onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    
                    (this.props.options && <ol > {this.props.options.map((option) => <Option key={option} optionText={option}/>)}</ol> )
                }
            </div>
        );
    }
}

class Option extends React.Component{
  
    render(){
        return(
            <div>
                <li>{this.props.optionText}</li>
            </div>
        );
    }
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: undefined
        };
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value='';
        const error = this.props.handleAddOption(option);
        //as we are using this in func, we will define constructor
        this.setState(()=>{
            return { error} ;
        });
    }

    render(){
        return(
            <div>
            {this.state.error && <p> {this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button type='submit'>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp/> , document.getElementById('app'));