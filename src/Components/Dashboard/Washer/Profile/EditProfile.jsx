import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../../Routes/routes";
import "./EditProfile.css";

export default function EditProfile({ washer }) {
    return (
        <div className="edit-profile-container">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Street Address</th>
                        <th>Suburb</th>
                        <th></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-striped">
                    <tr>
                        <td>WASHER</td>
                        <td>WASHER</td>
                        <td>23 Smith Street</td>
                        <td>Melbourne</td>
                        <td></td>
                        <td>
                            <NavLink to={routes.EDIT_PROFILE_WASHER}>
                                Edit
                            </NavLink>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
