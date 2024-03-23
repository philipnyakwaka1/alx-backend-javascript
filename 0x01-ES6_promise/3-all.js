import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([Promise.resolve(uploadPhoto()),
    Promise.resolve(createUser())]).then((results) => {
    const [photo, user] = results;
    console.log(photo.body, user.firstName, user.lastName);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}
