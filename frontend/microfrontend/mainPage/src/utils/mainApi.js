class mainApi {

    getAppInfo() {
        return Promise.all([this.getCardList(), this.getUserInfo()]);
    }
    
    getCardList() {
        return fetch(`${this._address}/${this._groupId}/cards`, {
          headers: {
            authorization: this._token,
          },
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    removeCard(cardID) {
        return fetch(`${this._address}/${this._groupId}/cards/${cardID}`, {
          method: 'DELETE',
          headers: {
            authorization: this._token,
          },
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    getUserInfo() {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
          headers: {
            authorization: this._token,
          },
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

    changeLikeCardStatus(cardID, like) {
        // Обычная реализация: 2 разных метода для удаления и постановки лайка.
        return fetch(`${this._address}/${this._groupId}/cards/like/${cardID}`, {
          method: like ? 'PUT' : 'DELETE',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json',
          },
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

}