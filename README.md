Уровень 1. Проектирование

Монолит фронта написан на react, следовательно, разбивать на микрофронты будем тоже используя react. Задачи переписывать каждый модуль на свой фреймворк у нас нет.
Из теоретического материала можно сделать вывод, что основная разница между SPA и Webpack в том, что SPA может использовать разные фреймворки для каждого модуля, а такой необходимости у нас нет. Следовательно, наш выбор - Webpack.

Уровень 2. Планирование изменений

Монолит

/src
	/components
	0	App.js
	3	AddPlacePopup.js 	// Попап новой карточки
	2	Card.js 			// Карточка (нажать, лайк, удалить)
	3	EditAvatarPopup.js 	// Попап Изменить аву (фото)
	3	EditProfilePopup.js // Попап Изменить профиль (имя, занятие)
	4	Footer.js 			// Футер на сайте простой, строка
	4	Header.js 			// Лого, кнопки Вход, Рега, Выход
	3	ImagePopup.js 		// Открытие фотки на карточке
	3	InfoTooltip.js 		// Форма успеха/неудачи после реги
	1	Login.js 			// Форма логина (логин, пароль, кнопка Войти)
	2	Main.js 			// Основа - секция профиля, секция карточек
	3	PopupWithForm.js 	// Шаблон попапа
	4	ProtectedRoute.js 	// Маршрут - логин/прелогин
	1	Register.js 		// Форма реги
	/utils
		api.js
		2	getAppInfo 		// выполняет 2 запроса для Main (getCardList, getUserInfo)
		2	getCardList
		3	addCard
		2	removeCard
		2	getUserInfo
		3	setUserInfo
		3	setUserAvatar
		2	changeLikeCardStatus // совмещает лайк и удаление лайка
		auth.js
		1	register
		1	login
		4	checkToken
	/blocks
	1	/auth-form
	2	/card
	2	/content
	4	/footer
	4	/header
	1	/login
	2	/page
	2	/places
	3	/popup
	2	/profile

Микросервисы

/auth
	/src
		/components
			Login.js
			Register.js
		/utils
			authApi.js
				register
				login
		/blocks
			/auth-form
			/login

/mainPage
	/src
		/components
			Main.js
			Card.js
		/utils
			mainApi.js
				changeLikeCardStatus
				getUserInfo
				getCardList
				getAppInfo
				removeCard
		/blocks
			/card
			/content
			/page
			/places
			/profile


/popups
	/src
		/components
			PopupWithForm.js
			EditProfilePopup.js
			EditAvatarPopup.js
			AddPlacePopup.js
			ImagePopup.js
			InfoTooltip.js
		/utils
			popupsApi.js
				setUserAvatar
				setUserInfo
				addCard
		/blocks
			/popup

/prelogin
	/src
		/components
			ProtectedRoute.js
			Header.js
			Footer.js
		/utils
			preloginApi.js
				checkToken
		/blocks
			/footer
			/header
