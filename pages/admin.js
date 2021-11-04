import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  function logout(e) {
    e.preventDefault();
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  }

  return (
    <div>
      admin
      {isLogin && (
        <button className="ui button" onClick={(e) => logout(e)} type="submit">
          Logout
        </button>
      )}
    </div>
  );
}
