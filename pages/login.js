import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const router = useRouter();
  function login(e) {
    e.preventDefault();
    axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        //로그인성공
        router.push("/admin");
      }
      console.log("Res", res.status);
    });
  }
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>ID</label>
          <input type="text" name="ID" placeholder="ID" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="pass-word" placeholder="Password" />
        </div>
        <button className="ui button" onClick={(e) => login(e)} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
