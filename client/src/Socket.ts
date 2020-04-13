import * as io from 'socket.io-client';

export const socket = io(`http://localhost:9081`);

let latestVersion = 0;

socket.emit('get version', (version: number) => {
  latestVersion = version;
  console.log('running version:', version);
});

socket.on('reconnect', () => {
  socket.emit('get version', (version: number) => {
    if (latestVersion !== version) {
      window.location.reload(true);
    }
  });
});

export function redirectToLogin() {
  socket.emit('get login url', (url: string) => {
    window.location.href = url;
  });
}

export function signOut() {
  localStorage.removeItem('token');
  window.location.reload(true);
}
