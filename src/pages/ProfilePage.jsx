import React from "react";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <div>Lütfen giriş yapınız.</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Profil Bilgileri</h1>
      <p>Ad: {user.name || "Ad bilgisi yok"}</p>
      <p>Email: {user.email || "Email bilgisi yok"}</p>
    </div>
  );
};

export default ProfilePage;
