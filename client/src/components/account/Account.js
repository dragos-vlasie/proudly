import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskPreview from "./TaskPreview";

export const Account = () => {
  const auth = useSelector(state => state.auth);
  if (!auth.isAuthenticated) return <Redirect to="/login" />;
  return (
    <div clasName="Account">
      <TaskForm />
      <TaskPreview />
    </div>
  );
};
export default Account;
