export const login = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          token: 'alksjdaçlksjd',
          usename: 'marcelosife@gmail.com',
        },
      });
    }, 3000);
  });
};
