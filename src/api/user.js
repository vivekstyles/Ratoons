// refer api organize
// https://www.upbeatcode.com/react/clean-api-architecture-for-react-project/

// const baseUrl = 'http://ratoons.tech/auth/';
const baseUrl = 'http://192.168.142.236:1533/';

// export const fetchData = async () => {
//   const res = await fetch(baseUrl + '/people');
//   const data = await res.json();
//   console.log(data);
// };

// google authentication
export const googleSignInApi = async obj => {
  const res = await fetch(baseUrl + '/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on API server!');
      }
    })
    .catch(error => {
      console.error(error);
      console.log('error');
    });

  return res;
};

//  user sign up api
export const SignUpApi = async obj => {
  const res = await fetch(baseUrl + 'api/user/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(
          'Something went wrong on API server!' + response.bodyUsed,
        );
      }
    })
    .catch(error => {
      console.error(error);
      console.log('error');
    });

  return res;
};

//  user sign in api
export const SignInApi = async obj => {
  const res = await fetch(baseUrl + 'api/user/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(
          'Something went wrong on API server!' + response.bodyUsed,
        );
      }
    })
    .catch(error => {
      console.error(error);
      console.log('error');
    });

  return res;
};
