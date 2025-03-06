class popupsApi {
    
    addCard({ name, link }) {
        return fetch(`${this._address}/${this._groupId}/cards`, {
          method: 'POST',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            link,
          }),
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    setUserInfo({ name, about }) {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            about,
          }),
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
    
    setUserAvatar({ avatar }) {
        return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
          method: 'PATCH',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            avatar,
          }),
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

}