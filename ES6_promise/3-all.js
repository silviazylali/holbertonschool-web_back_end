import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then((responses) => {

            console.log(
                `${Response[0].firstName} ${Response[1].firstName} ${Response[1].lastName}`);
            console.log(photoResponse.body);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export default handleProfileSignup;