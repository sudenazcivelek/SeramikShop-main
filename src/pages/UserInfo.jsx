import React from "react";
import "./UserInfo.css"; // CSS dosyası aşağıda

const UserInfo = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            className="profile-avatar"
          />
          <h2>Ahmet Yılmaz</h2>
          <p className="profile-role">Üyelik: Premium</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <strong>Kullanıcı Adı:</strong>
            <span>ahmetyilmaz</span>
          </div>
          <div className="detail-item">
            <strong>E-posta:</strong>
            <span>ahmetyilmaz@example.com</span>
          </div>
          <div className="detail-item">
            <strong>Telefon:</strong>
            <span>+90 532 123 4567</span>
          </div>
          <div className="detail-item">
            <strong>Adres:</strong>
            <span>İstanbul, Türkiye</span>
          </div>
          <div className="detail-item">
            <strong>Parola:</strong>
            <span>********</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn disabled">Profil Düzenle</button>
          <button className="btn disabled">Parola Değiştir</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
