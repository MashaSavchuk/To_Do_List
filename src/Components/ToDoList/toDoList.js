import React, {Fragment, useEffect} from "react"; //useEffect замінить componentDidMounth()
import {connect} from "react-redux";
import ToDoListItem from "./ToDoListItem/toDoListItem";
import { updateDatabase } from "../../Services/api-service";
import { getAllList } from "../../Actions/ToDoListActions";


const ToDoList = ({List, CurrentToDo, getAllList}) => {
    // console.log("ContactList ", List);
    useEffect(() => {
        // updateDatabase()
        updateDatabase().then(data => { //відловлюємо нашу відповідь з api-services
            // console.log("data ===>>", data);
            getAllList(data);
        })
    }, [])
    // })
    const item = List.map(contact => {
         return(
             <ToDoListItem Id={contact.Id} key={contact.Id} todoDescription={contact.todoDescription} Deadline={contact.Deadline} />
         )
    })
    return(
        <Fragment>
            <div className="container">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <div className="list-wrapper">
                                        <ul className="d-flex flex-column-reverse todo-list">
                                           {/* <ToDoListItem/> */}

                                           {/* тут проблема з addToDo */}
                                           { item.length > 0 ? item : <h2>ToDo task list is empty</h2> }

                                            {/* {CurrentToDo.length === 0 ? List.map(contact => {
                                            return (
                                                <ToDoListItem key={contact.Id} {...contact} />
                                            )
                                        }) 
                                        : CurrentToDo.map(contact => {
                                            return (
                                                <ToDoListItem key={contact.Id} {...contact} />
                                            )
                                        }) }  */}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
     

            {/* <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main-box clearfix">
                        <div className="table-responsive">
                            <table className="table user-list">
                                <thead>
                                    <tr>
                                        <th><span>User</span></th>
                                        <th><span>Created</span></th>
                                        <th className="text-center"><span>Status</span></th>
                                        <th><span>Email</span></th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>

                                <tbody>
                                     { item.length > 0 ? item : <h2>Contact list is empty</h2> }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </Fragment>
    )
}
const mapStateToProps = ({ToDoListReducer}) => {
    const { List, CurrentToDo } = ToDoListReducer;
    return { List, CurrentToDo }
}
const mapDispatchToProps = {
    getAllList
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);