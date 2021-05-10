import React, { Component } from 'react';
import UserService from '../services/UserService';
import HeaderComponent from './HeaderComponent';
/*
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
*/

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
            });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    
    editUser(id){
        this.props.history.push(`/add-user/${id}`); 
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }
    
     
    render() {
        /*
        const  useStyles = makeStyles((theme) => ({
            button: {
              margin: theme.spacing(1),
            },
          }));
        
          export default function IconLabelButtons() {
            const classes = useStyles();
          };
           */  
        return (
            <div>
                <HeaderComponent />
                <h2 className="text-center">Users List</h2>
                <br></br>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User First Name</th>
                                <th>User Last Name</th>
                                <th>User Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key = {user.id}>
                                        <td> { user.firstName} </td>
                                        <td> { user.lastName} </td>
                                        <td> { user.email} </td>
                                        <td>
                                        {/*<Button
                                            onClick = { () => this.editUser(user.id)} 
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                        >
                                            Delete
                                         </Button>*/}
                                            <button onClick = { () => this.editUser(user.id)} className="btn btn-info"> Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.deleteUser(user.id)} className="btn btn-danger"> Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;