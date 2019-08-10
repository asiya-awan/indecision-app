console.log('app.js is running');

// var appRoot =document.getElementById('app');
// var template = <p>This is JSX from app.js!</p>;

// ReactDOM.render(template,appRoot);

class UsersApp extends React.Component {
    constructor(props) {
        super(props);    
        this.addUser = this.addUser.bind(this);
        this.state={ users:[]}
    }
    addUser(user){
        console.log(user);

        this.setState((prevState) => {
            return {

               users: prevState.users.concat([user])
            };
      });
    }

    render() {
        return (
          <div>
            <Users users = {this.state.users}/>
            <AddUser addUser={this.AddUser}/>
          </div>
        );
      }
}


    class Users extends React.Component {
        constructor(props) {
            super(props);
         
        }
    
        render() {
            return (
              <div>  
               <hr/>
               <h3>Users</h3>
           
               {
                   <p>{this.props.users}</p>
               }
             
              </div>
            );
          }
        }

    class User extends React.Component {
        render() {
            return (
            <div>
                {this.props.userText}
            </div>
            );
        }
          }
        class AddUser extends React.Component {
            constructor(props) {
                super(props);
                this.addUser = this.addUser.bind(this);
             
            }
        
            addUser(e){
                e.preventDefault();
            
              const name= e.target.elements.username.value.trim();
              const age= e.target.elements.age.value;
              const sub= e.target.elements.subject.value.trim();
        
              const user = {
                  n:name,
                  a:age,
                  s:sub
              };
              if(user){
                  this.props.addUser(user);
                
              }
            }
              
        
            render() {
                return (
                  <div >
                    <h1>Shopping List for </h1>
                    <form onSubmit={this.addUser}>
                        <input type='text' name='username'/>
                        <input type='number' name='age'/>
                        <input type='text' name='subject'/>
                        <button type='submit'>Add User</button>
                    </form>
                  </div>
                );
              }
            }
        


ReactDOM.render( <UsersApp name="Users"/> , document.getElementById('app'));
