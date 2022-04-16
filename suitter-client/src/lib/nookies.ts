import nookies from 'nookies';

const setCookies = (name: string, value: string, option?: object) => {
  nookies.set(null, name, value, {
    maxAge: 30 * 60,
    path: '/',
    ...option,
  });
};

const destroyCookie = (name: string) => {
  nookies.destroy(null, name);
};

export { setCookies, destroyCookie };
