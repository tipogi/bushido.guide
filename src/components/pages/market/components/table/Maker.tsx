const ONLINE = 'online'
const RECENTLY_ONLINE = 'recently_online';
const OFFLINE = 'offline';

interface IMaker {
  status: string
}

export default function Maker({ status }: IMaker) {
  let display_status;
  if ( status === ONLINE) {
    display_status = 'Online'
  } else if ( status === RECENTLY_ONLINE) {
    display_status = 'Recently Online';
  } else if (status === OFFLINE) {
    display_status = 'Offline'
  }

  return <span className={`maker-${status}`}>{ display_status} </span>
}