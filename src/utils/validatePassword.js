export const validatePassword = (password, validUser) => {

    // const users = JSON.parse(localStorage.getItem('users'));
    // const validUser = users.find((user) => user.email === email)
    if (validUser.password === password) {
        return true;
    } else return false

};