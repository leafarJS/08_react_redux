import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";
import {
  createAction,
  deleteAction,
  notAction,
  readAllAction,
  updateAction,
} from "../actions/crudAction";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
//
const CrudApi = () => {
  //const [db, setDb] = useState(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  //
  let api = helpHttp();
  let url = "http://localhost:5000/santos";
  useEffect(() => {
    setLoader(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch(readAllAction(res));
          setError(null);
        } else {
          //setDb(null);
          dispatch(notAction());
          setError(res);
        }
        setLoader(false);
      });
  }, [url, dispatch]);
  //
  function createData(data) {
    data.id = Date.now();
    //console.log(data);
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
    //setDb([...db, data]);
  }
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData);
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Are you sure you want to delete the data? ${id}`
    );
    let options = {
      headers: { "Content-Type": "application/json" },
    };
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          //let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  //
  return (
    <div>
      <h2>CRUD API REDUX</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loader && <Loader />}
        {error && (
          <Message
            msj={`Error: ${error.status} ${error.statusText}`}
            bgColor="#dc3445"
          />
        )}

        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </div>
  );
};
export default CrudApi;
