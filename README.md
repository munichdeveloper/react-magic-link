### <p align=center>munich developer proudly presents</p>
# <p align=center>react-magic-link - a react boilerplate project which you can use with magic.link</p>

This illustrates how a frontend can be implemented that uses [magic.link](https://magic.link) to authenticate a user by his email solely.
<br />Check out [this repository here](https://github.com/munichdeveloper/user-service/) with some detailed description and the Java Backend lib which you can use to implement your backend.

Also check out the [live app](https://documan.onrender.com/) that demonstrates the magic.link authentication.

# Setup

1. Rename _.env to .env and put in your public key from magic.link into _REACT_APP_PK_KEY_ (this is your public key and thus is ok to be shared)
2. Configure your backend url in src\Config.js - for dev it is _http://localhost:8080_
3. _yarn start_ and have fun
