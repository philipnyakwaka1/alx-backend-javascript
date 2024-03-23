import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((results) => {
    const [photo, user] = results;
    console.log(photo.body, user.firstName, user.lastName);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}