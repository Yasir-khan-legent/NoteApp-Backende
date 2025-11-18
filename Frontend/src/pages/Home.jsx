import React, { use, useEffect, useState } from "react";
import "./home.css";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [carddata, setdata] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteStatus, setNoteStatus] = useState("");
  const [edit, setedit] = useState(false);
  const [eid, seteid] = useState(null);

  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [search, setsearch] = useState("");
  const openDetails = (item) => {
    setDetailData(item);
    setShowDetail(true);
  };

  const filterdata = carddata.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    get();
  }, []);

  function handleEdit(item) {
    setShowModal(true);
    setedit(true);
    setNoteTitle(item.title);
    setNoteContent(item.note);
    setNoteStatus(item.status);
    seteid(item._id);
  }

  async function update() {
    const res = await fetch(
      `https://note-app-backende.vercel.app/api/auth/Update/${eid}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: noteTitle,
          note: noteContent,
          status: noteStatus,
        }),
      }
    );
    const result = await res.json();
    console.log(result);

    get();
    closeModal();
  }

  async function reset() {
    const res = await fetch(
      "https://note-app-backende.vercel.app/api/auth/Delete",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    const mes = res.json();
    console.log(mes);

    get();
  }

  async function deleteone(id) {
    const res = await fetch(
      `https://note-app-backende.vercel.app/api/auth/Delete/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    const msg = await res.json();
    console.log(msg);

    get();
  }
  async function get() {
    const res = await fetch(
      "https://note-app-backende.vercel.app/api/auth/Fetch",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    const data = await res.json();
    setdata(data);
    console.log(data);
  }

  async function handlelogout(e) {
    e.preventDefault();
    const res = await fetch(
      "https://note-app-backende.vercel.app/api/auth/logout",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    const data = await res.json();
    console.log(data);
   navigate("/login", { replace: true });
  }

  async function postdata() {
    const res = await fetch(
      "https://note-app-backende.vercel.app/api/auth/Create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: noteTitle,
          note: noteContent,
          status: noteStatus,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    get();
    closeModal();
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNoteTitle("");
    setNoteContent("");
    setNoteStatus("");
  };
  const [open, setopen] = useState(false);
  useEffect(() => {
    const handleBodyClick = () => {
      setopen(false);
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <>
      <div className="navmobile">
        <div className="logo">
          <h1 className="hname">NoteApp</h1>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation(), setopen(!open);
          }}
          className="mbtns"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {open && (
        <div className="dropdown">
          <p onClick={toggleTheme}>
            <i className="fa-solid fa-circle-half-stroke"></i> Theme
          </p>
          <p onClick={reset}>
            {" "}
            <i className="fa-solid fa-trash-arrow-up"></i> Reset
          </p>
          <p onClick={handlelogout}>
            {" "}
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </p>
        </div>
      )}
      <div className="serchdiv">
         <input
            className="search"
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Enter Name Here....."
          />
      </div>
      <div className="navbar">
        <h1 className="logo">NoteApp</h1>
        <div className="btns">
          <input
            className="search"
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Enter Name Here....."
          />

          <button onClick={handlelogout}>
            Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
          <button onClick={reset}>
            Reset <i className="fa-solid fa-trash-arrow-up"></i>
          </button>
          <div className="container" onClick={toggleTheme}>
            <div className="toggle">
              <input type="checkbox" />
              <span className="button"></span>
              <span className="label">☼</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="hleft">
          <div className="text">
            <p className="heading">Welcome To NoteApp</p>
            <p>Organize Your Thoughts.</p>
            <p>Capture Every Idea.</p>
            <span className="texts">
              Welcome to your personal space for ideas. Here, every note you
              create will stay organized and easy to find. Whether it’s a quick
              thought, an important reminder, or a long plan you don’t want to
              forget — this is where it all comes together. Start by adding a
              new note and build your own collection of thoughts, goals, and
              memories in one simple place.{" "}
            </span>
          </div>
        </div>
        <div className="hright">
          <div className="imgmain"></div>
        </div>
      </div>
      <div className="header2">
        <h2>Your Notes Here</h2>
      </div>
      <div className="cardmain">
        {search === "" ? (
          carddata.length !== 0 ? (
            carddata.map((item, i) => (
              <div className="cards" key={i}>
                <h1>
                  {item.title.length > 12
                    ? item.title.slice(0, 12) + "..."
                    : item.title}
                </h1>

                <div>
                  <div>
                    {item.note.length > 120
                      ? item.note.slice(0, 120) + "..."
                      : item.note}
                  </div>

                  {item.note.length > 120 && (
                    <button
                      className="see-more-btn"
                      onClick={() => openDetails(item)}
                    >
                      See More
                    </button>
                  )}
                </div>

                <div className="cardbtn">
                  <button
                    className={item.status === "Pending" ? "status" : "cstatus"}
                  >
                    {item.status === "Pending" ? (
                      <i className="fa-solid fa-hourglass-half"></i>
                    ) : (
                      <i className="fa-regular fa-circle-check"></i>
                    )}{" "}
                    {item.status}
                  </button>

                  <div className="buttons">
                    <span onClick={() => handleEdit(item)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </span>

                    <span onClick={() => deleteone(item._id)}>
                      <i className="fa-solid fa-trash"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="para">
              No notes to show{" "}
              <button className="notfond" onClick={openModal}>
                create
              </button>
            </p>
          )
        ) : filterdata.length !== 0 ? (
          filterdata.map((item, i) => (
            <div className="cards" key={i}>
              <h1>
                {item.title.length > 12
                  ? item.title.slice(0, 12) + "..."
                  : item.title}
              </h1>

              <div>
                <div>
                  {item.note.length > 120
                    ? item.note.slice(0, 120) + "..."
                    : item.note}
                </div>

                {item.note.length > 120 && (
                  <button
                    className="see-more-btn"
                    onClick={() => openDetails(item)}
                  >
                    See More
                  </button>
                )}
              </div>

              <div className="cardbtn">
                <button
                  className={item.status === "Pending" ? "status" : "cstatus"}
                >
                  {item.status === "Pending" ? (
                    <i className="fa-solid fa-hourglass-half"></i>
                  ) : (
                    <i className="fa-regular fa-circle-check"></i>
                  )}{" "}
                  {item.status}
                </button>

                <div className="buttons">
                  <span onClick={() => handleEdit(item)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </span>

                  <span onClick={() => deleteone(item._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No notes found</p>
        )}

        {showDetail && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h2>{detailData.title}</h2>
              <p>{detailData.note}</p>
              <div className="statusbtn">
                <button
                  className={
                    detailData.status === "Pending" ? "status" : "cstatus"
                  }
                >
                  {detailData.status === "Pending" ? (
                    <i className="fa-solid fa-hourglass-half"></i>
                  ) : (
                    <i className="fa-regular fa-circle-check"></i>
                  )}{" "}
                  {detailData.status}
                </button>
              </div>

              <button
                className="close-btn"
                onClick={() => setShowDetail(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        )}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Add New Note</h2>
              <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
              <textarea
                placeholder="Write your note here..."
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              ></textarea>
              <div className="status-options">
                <label>
                  <input
                    type="radio"
                    value="Pending"
                    checked={noteStatus === "Pending"}
                    onChange={(e) => setNoteStatus(e.target.value)}
                  />
                  Pending
                </label>

                <label>
                  <input
                    type="radio"
                    value="Completed"
                    checked={noteStatus === "Completed"}
                    onChange={(e) => setNoteStatus(e.target.value)}
                  />
                  Complete
                </label>
              </div>

              <div className="modal-buttons">
                <button onClick={edit ? update : postdata}>
                  {edit ? "Update" : "Add"}
                </button>
              </div>
              <button className="close-btn" onClick={closeModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      <button className="float-btn" onClick={openModal}>
        +
      </button>
    </>
  );
}
